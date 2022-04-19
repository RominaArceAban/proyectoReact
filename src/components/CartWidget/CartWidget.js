import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div>
            <img className="CartImg" src={'./img/cart.png'} alt="cart"/>
            { getQuantity() }
        </div>
    )
}

export default CartWidget