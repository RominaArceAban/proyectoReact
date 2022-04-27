import { useState, useEffect } from "react"
//import { getProducts } from "../../asyncmock"
import { getDocs, collection, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { firestoreDb } from "../../services/firebase"

const ItemListContainer = (props) => {
    const [productos, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
    //     getProducts(categoryId).then(prods =>{
    //       setProducts(prods)
    // }).catch(error => {
    //     console.log(error)
    // })  
      const collectionRef = categoryId 
       ? query(collection(firestoreDb, 'productos'), where('category', '==', categoryId)) : 
       collection(firestoreDb, 'productos')

      getDocs(collectionRef).then(response => {
          console.log(response)
          const productos = response.docs.map(doc => {
              return { id: doc.id, ...doc.data()}
          })
          setProducts(productos)
      })
    }, [categoryId])
        

    return (
        <div>
          <h1>{props.greeting}</h1>
          <ItemList productos={productos}/> 
        </div> 
    )
}

export default ItemListContainer