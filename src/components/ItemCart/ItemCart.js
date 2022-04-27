import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = ({id, img, nombre, precio, quantity}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="carritoCompras">
            <div >
                <picture>
                    <img className="carritoImg" src={img} alt={nombre}/>
                </picture> 
            </div>
            <div className="carritoDescripcion">
                <p>
                   Talle: 
                </p>
                <p>
                   Precio: ${precio} 
                </p>
                <p>
                   Cantidad: {quantity} 
                </p>
                <p>
                   Subtotal: ${quantity * precio} 
                </p>
                <button onClick={() => removeItem(id)}>ELIMINAR</button>
            </div>
        </div>
    )
}

export default ItemCart