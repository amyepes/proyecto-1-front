import { Link } from 'react-router'
import './Start.css'

function Inicio() {

    return (
        <section id="inicio" className='hero'>
            <h1>Descubrí el <span>Universo</span> de One Piece</h1>
            <p>Explorá datos fascinantes de la One Piece API. Buscá, filtrá y guardá tus favoritos, bóludo.</p>
            <Link to={"/Explorar"}>
                <button className='hero-btn'>Explorar ahora</button>
            </Link>
        </section>
    )
}

export default Inicio;