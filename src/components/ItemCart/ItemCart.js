import { useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = ({id, img, nombre, precio, quantity}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <div>
                <picture>
                    <img src={img} alt={nombre}/>
                 </picture> 
             </div>
             Talle:
             Precio: {precio}
             Cantidad: {quantity}
             Subtotal: {quantity * precio} 
             <button onClick={() => removeItem(id)}>ELIMINAR</button>
        </div>
    )
}

export default ItemCart