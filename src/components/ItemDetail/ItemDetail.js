
import './ItemDetail.css';


const ItemDetail = ({ nombre, img, descripcion, stock, precio, category}) => {

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
              <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail