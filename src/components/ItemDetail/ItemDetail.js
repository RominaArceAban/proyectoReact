
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const ItemDetail = ({ id, nombre, img, descripcion, stock, precio, category}) => {

  const { addItem, isInCart } = useContext(CartContext)

  const handleOnAdd = (count) => {
      const productObj = {
        id, nombre, precio, quantity: count
      }

      addItem(productObj)
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
              { isInCart(id) ? <Link to='/cart' className='Boton'>Ir al Carrito</Link> : <Counter stock={stock} onAdd={handleOnAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail