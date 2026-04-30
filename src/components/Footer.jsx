function Footer() {
    return (
        <footer className="mt-auto bg-gradient-to-b from-transparent to-slate-900/50 border-t border-slate-700/30 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className="flex-1">
                    <p className="text-slate-300 text-sm">
                        Proyecto institucional creado para explorar datos del universo de One Piece.
                    </p>
                </div>

                <div className="flex-1">
                    <p className="text-slate-400 text-sm">
                        Datos obtenidos de{' '}
                        <a
                            href="https://api-onepiece.com/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 hover:underline"
                        >
                            One Piece API
                        </a>
                    </p>
                </div>

                <div className="flex-1">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} - Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
