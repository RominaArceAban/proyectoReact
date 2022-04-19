import './ItemCount.css';
import { useState} from 'react';

const Counter = ({ stock, onAdd}) => {

    const [count, setCount] = useState({count: 0})

    const decrement = () => {
        if (count.count > 0) {
          setCount({...count, count: count.count - 1})  
        }  
    }

    const increment = () => {
        if (count.count < `${stock}`) {
          setCount({...count, count: count.count + 1})   
        } 
    }

    return(
        <div className='Div'>
            <div className="DivBotones">
               <button className='Boton' onClick={decrement}>-</button>
               <button className='Boton'>{count.count}</button>
               <button className='Boton' onClick={increment}>+</button> 
            </div>
            <div>
               <button className='Boton' onClick={() => onAdd(count.count)}>Agregar al carrito</button> 
            </div>   
        </div>
    )
}

export default Counter