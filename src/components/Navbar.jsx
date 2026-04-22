import { Link } from 'react-router'
import './Navbar.css'
import Logo from './Logo'

function Navbar() {
    return (
        <nav className='navbar'>
            <Logo />

            <ul className="nav-links">
                {/*<li><a href="#inicio" className="active">Inicio</a></li>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>*/}
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/Explorar"}>Explorar</Link></li>
                <li><Link to={"/Favoritos"}>Favoritos</Link></li>
                {/*<li>|</li>*/}
                <li className='special-li'><Link to={"/Contactanos"}>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;