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
          
          <ItemDetail detalles={detail}/> 
        </div> 
    )
}

export default ItemDetailContainer