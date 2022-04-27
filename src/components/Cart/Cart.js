import './Cart.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'




const Cart = () => {

    const { cart } = useContext(CartContext)

    const total = cart.reduce((obj, prod) => obj + prod.precio * prod.quantity,0)
        

    if(cart.length === 0) {
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
            <div>Total: ${total}</div>
        </div>
        </>
    )
}

export default Cart