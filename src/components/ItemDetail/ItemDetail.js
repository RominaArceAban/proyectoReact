
import './ItemDetail.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';


const ItemDetail = ({ id, nombre, img, descripcion, stock, precio, category}) => {

  const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

  const handleOnAdd = (count) => {
      const productObj = {
        id, img, nombre, precio, quantity: count
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
              { isInCart(id) ? <Link to='/cart' className='Boton'>Terminar mi compra</Link> : <Counter onAdd={handleOnAdd} stock={stock} initial={getQuantityProd(id)} />}
            </div>
        </div>
    )
}

export default ItemDetail