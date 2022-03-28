import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <img></img>
            <button className="boton">Inicio</button>
            <ul className="NavBarList">
                <li><a className="NavBarList" href="#">Remeras</a></li>
                <li><a className="NavBarList" href="#">Buzos</a></li>
                <li><a className="NavBarList" href="#">Camisas</a></li>
            </ul>
            <button className="boton">Login</button>
        </nav>
    )
}

export default NavBar