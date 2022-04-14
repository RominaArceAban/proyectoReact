import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProductsById] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(item =>{
          setProductsById(item)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })

    return (() => {
        setProductsById()
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

  