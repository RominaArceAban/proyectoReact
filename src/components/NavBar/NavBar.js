import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
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