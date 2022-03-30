import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div>
                <h1>Black Baccara</h1>
            </div>
            <div className="DivBotones">
                <button className="Boton">Remeras</button>
                <button className="Boton">Buzos</button>
                <button className="Boton">Camisas</button>
            </div>
            <div>
                <CartWidget />
            </div>   
        </nav>
    )
}

export default NavBar