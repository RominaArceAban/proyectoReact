import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [detail, setProductsById] = useState([])

    useEffect(() => {
        getProductsById().then(item =>{

          setProductsById(item)
    }).catch(error => {
        console.log(error)
    })  
    }, [])
        

    return (
        <div>
          <ItemDetail id={detail.id} nombre={detail.nombre} img={detail.img} descripcion={detail.descripcion} stock={detail.stock} precio={detail.precio} /> 
        </div>
    )
}

export default ItemDetailContainer