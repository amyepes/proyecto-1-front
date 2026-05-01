import { NavLink } from 'react-router'
import Logo from './Logo'

function Navbar() {
    const linkClassName = ({ isActive }) =>
        [
            'relative inline-flex items-center px-1 py-2 text-sm font-medium transition-all duration-200 sm:text-base',
            'text-slate-300 hover:text-white',
            'after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-blue-brand after:transition-all after:duration-200',
            isActive
                ? 'text-white after:scale-x-100 after:opacity-100'
                : 'after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100',
        ].join(' ')

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-md sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
                <Logo />

                <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                    <li>
                        <NavLink to="/" className={linkClassName}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Explorar" className={linkClassName}>
                            Explorar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Favoritos" className={linkClassName}>
                            Favoritos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contactanos" className={linkClassName}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;