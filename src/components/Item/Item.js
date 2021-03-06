import './Item.css';
import { Link } from "react-router-dom"

const Item = ({ id, nombre, img}) => {
    return(
        <div className='cajaItemU'>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
            <h2>{nombre}</h2>
            <Link to={`/item/${id}`} className='cajaDetail'>Ver Detalle</Link>
        </div>
    )
}

export default Item