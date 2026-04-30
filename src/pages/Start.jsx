import { Link } from 'react-router'
import AdBlockerModal from '../components/AdBlockerModal'

function Inicio() {

    return (
        <>
            <AdBlockerModal />
            <section className='min-h-[42vh] pt-[5vh] text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Descubrí el <span className='text-cyan-400'>Universo</span> de One Piece</h1>
            <p className='px-[29vw] mx-[3%] text-lg text-slate-300 mb-8'>Explorá datos fascinantes de la One Piece API. Buscá, filtrá y guardá tus favoritos, bóludo.</p>
            <Link to="/Explorar">
                <button className='bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 mb-[5vh] shadow-lg hover:shadow-cyan-500/50'>Explorar ahora</button>
            </Link>
            </section>
        </>
    )
}

export default Inicio;