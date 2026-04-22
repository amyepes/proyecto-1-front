import './NotFound.css'
import { Link } from 'react-router'

function NotFound() {
    return (
        <div className='bg'>
            <h1>404</h1>
            <h2>Pagina no encontrada, ché</h2>
            <p>La ruta que buscás no se encontrá, boludo.</p>
            <Link to={"/"}>
                <button className='bg-btn'>Volver al inicio</button>
            </Link>
        </div>
    )
}

export default NotFound;