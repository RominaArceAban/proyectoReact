
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({ nombre, img, descripcion, stock, precio, category}) => {
  
  const [quantity, setQuantity] = useState(0)

  const handleOnAdd = (count) => {
      setQuantity(count)
  }

    return(
        <div className='cajaItem'>
            <div>
               <picture>
                 <img src={img} alt={nombre}/>
               </picture> 
            </div>
            <div>
              <h1>{nombre}</h1>
              <p>
                Categoria: {category}
              </p>
              <p>
                Descripcion: {descripcion}
              </p>
              <p>
                Stock: {stock}
              </p>
              <p>
                Precio: {precio}
              </p>
              {quantity > 0 ? <Link to='/cart' className='Boton'>Ir al Carrito</Link> : <Counter initial={0} stock={10} onAdd={handleOnAdd} />}
              
            </div>
        </div>
    )
}

export default ItemDetail