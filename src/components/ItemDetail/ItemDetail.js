
import './ItemDetail.css';


const ItemDetail = ({ id, nombre, img, descripcion, stock, precio}) => {

    return(
        <div className='cajaItem'>
            <h1>{nombre}</h1>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
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
    )
}

export default ItemDetail