import { Link } from 'react-router'

function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-84px)] bg-slate-100'>
            <h1 className='text-[100px] text-[var(--blue-color)] mb-2.5'>404</h1>
            <h2 className='text-black m-0 font-bold'>Pagina no encontrada, ché</h2>
            <p className='mt-2'>La ruta que buscás no existe, boludo.</p>
            <Link to={"/"}>
                <button className='mt-5 rounded-[10px] border border-transparent py-[1em] px-[1.9em] text-[1em] font-medium bg-[var(--blue-color)] text-[#0e172a] transition-colors duration-[250ms] hover:border-[#199dda] focus:outline focus:outline-4'>
                    Volver al inicio
                </button>
            </Link>
        </div>
    )
}

export default NotFound;