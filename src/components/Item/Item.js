
const Item = ({ nombre, img}) => {
    return(
        <div>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
            <h2>{nombre}</h2>
            <button>Ver Detalle</button>
        </div>
    )
}

export default Item