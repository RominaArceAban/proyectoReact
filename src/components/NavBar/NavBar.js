import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { getCategories } from '../../asyncmock';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection } from "firebase/firestore"

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        // getCategories().then(categories => {
        //     setCategories(categories)
        // })
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return(
        <nav className="NavBar">
            <Link to='/'>
                <h1 className='Logo'>Black Baccara</h1>
            </Link>
            <div className="DivBotonesNavBar">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({ isActive }) => isActive ? 'BotonNavBar' : 'BotonDesactivado'}
            >{cat.descripcion}</NavLink>) }
            </div>
            <div>
                <CartWidget />
            </div> 
        </nav>
    )
}

export default NavBar