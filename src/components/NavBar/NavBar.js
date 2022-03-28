import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <img></img>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Buzos</a></li>
                <li><a href="#">Camisas</a></li>
            </ul>
            <button>Carrito</button>
        </nav>
        /*<header class="header">
        <img class="header__logo" src="./assets/logo.png"  alt="Logo">
        <nav class="header__nav">
            <ul class="header__list">
                <li class="header__item"><a class="header__item--links" href="#">Inicio</a></li>
                <li class="header__item"><a class="header__item--links" href="./secciones/Remeras.html">Remeras</a></li>
                <li class="header__item"><a class="header__item--links" href="./secciones/Buzos.html"> Buzos</a></li>
                <li class="header__item"><a class="header__item--links" href="./secciones/Talles.html">Talles</a></li>
                <li class="header__item"><a class="header__item--links" href="./secciones/Contactanos.html">Contacto</a></li>
            </ul>
        </nav>
        </header>*/
    )
}

export default NavBar