import './ItemCount.css';
import { useState} from 'react';

const Counter = ({ stock = 0, initial = 1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1)  
        }  
    }

    const increment = () => {
        if (quantity < stock) {
          setQuantity(quantity + 1)   
        } 
    }

    if(stock === 0) {
        return <button disabled>No hay stock disponible</button>
    }

    return(
        <div className='Div'>
            <div className="DivBotones">
               <button className='Boton' onClick={decrement}>-</button>
               <button className='Boton'>{quantity}</button>
               <button className='Boton' onClick={increment}>+</button> 
            </div>
            <div>
               <button className='Boton' onClick={() => onAdd(quantity)}>Agregar al carrito</button> 
            </div>   
        </div>
    )
}

export default Counter