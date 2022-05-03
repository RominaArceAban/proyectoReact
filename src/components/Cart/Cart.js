import './Cart.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { firestoreDb } from '../../services/firebase/index'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'



const Cart = () => {
    const [ loading, setLoading] = useState(false)
    const { cart, getQuantity, getTotal } = useContext(CartContext)

    const createOrder = () => {

        setLoading(true)
         
        const objOrder = {
            buyer: {
                name: 'Romina Arce',
                phone: '1512341234',
                email: 'rarce@gmail.com',
            },
            items: cart,
            total: getTotal(),
            date: new Date()

        }

    
    const ids = cart.map(prod => prod.id)

    const batch = writeBatch(firestoreDb)

    const collectionRef = collection(firestoreDb, 'productos')

    const outOfStock = []

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
      .then(response => {
          response.docs.forEach(doc => {

            const dataDoc = doc.data()

            const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

            if(dataDoc.stock >= prodQuantity) {
                batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc})
            }
          })
      }).then(() => {

          if(outOfStock.length === 0) {
              const collectionRef = collection(firestoreDb, 'ordenes')
              return addDoc(collectionRef, objOrder)
          } else {
              return Promise.reject({ name: 'outOfStockError', productos: outOfStock})
          }
      }).then(({ id }) => {
          batch.commit()
          console.log(`ID de la orden: ${id}`)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })
    }

    if(loading) {
        return <h2>Cargando...</h2>
    }

    if(getQuantity() === 0) {
        return (
            <>
              <h1>Tu carrito</h1>
              <h3>No tienes ningun articulo en tu carrito de compras</h3>
              <h3>Haga clic <Link to='/'>AQUI</Link> para empezar a comprar</h3>
            </>  
        )
    }

    return (
        <>
        <div className='Sidebar'>
            <h1>Tu carrito</h1>
            <div>
                {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
            </div>
            <div>Total: ${getTotal()}</div>
            <button onClick={() => createOrder()}>Generar orden de compra</button>
        </div>
        </>
    )
}

export default Cart