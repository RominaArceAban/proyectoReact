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
                <h1>Black Baccara</h1>
            </Link>
            <div className="DivBotones">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({ isActive }) => isActive ? 'Boton' : 'Boton'}
            >{cat.descripcion}</NavLink>) }
                <NavLink to='/' className={({ isActive }) => isActive ? 'Boton' : 'BotonDesactivado'}>Remeras</NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? 'Boton' : 'BotonDesactivado'}>Buzos</NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? 'Boton' : 'BotonDesactivado'}>Camisas</NavLink>
            </div>
            <div>
                <CartWidget />
            </div> 
        </nav>
    )
}

export default NavBar