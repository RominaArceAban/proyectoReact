import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
    const [productos, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods =>{
          setProducts(prods)
    }).catch(error => {
        console.log(error)
    })  
    }, [])
        

    return (
        <div>
          <h1>{props.greeting}</h1>
          <ItemList productos={productos}/> 
        </div> 
    )
}

export default ItemListContainer