import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { firestoreDb } from "../../services/firebase"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading] = useState(false)

    const { productId } = useParams()

    useEffect(() => {
    //     getProductsById(productId).then(item =>{
    //       setProductsById(item)
    // }).catch(error => {
    //     console.log(error)
    // }).finally(() => {
    //     setLoading(false)
    // })

    getDoc(doc(firestoreDb, 'productos', productId)).then(response => {
        console.log(response)
        const product = { id: response.id, ...response.data()}
        setProduct(product)
    })

    return (() => {
        setProduct()
    }) 
    }, [productId])
        

    return (
        <div>
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                product ? 
                    <ItemDetail  {...product} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )
}

export default ItemDetailContainer

  