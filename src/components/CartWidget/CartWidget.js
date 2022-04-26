import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className='Carrito'>
            <img className="CartImg" src={'./img/cart.png'} alt="cart"/>
            { getQuantity() }
        </Link>
    );
}

export default CartWidget