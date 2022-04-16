
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';


const ItemDetail = ({ nombre, img, descripcion, stock, precio, category}) => {

  const handleOnAdd = (quantity) => {
    if (quantity > 0) {
      console.log(`Se agregaron ${quantity} productos`)
    }
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
              <Counter initial={0} stock={10} onAdd={handleOnAdd} />
            </div>
        </div>
    )
}

export default ItemDetail