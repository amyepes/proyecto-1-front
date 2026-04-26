

function Cargando() {
    return (
        <section
            className="grid min-h-[40vh] place-items-center gap-3 text-slate-200"
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <svg
                className="h-10 w-10 motion-safe:animate-spin text-cyan-400"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                />
                <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M22 12a10 10 0 0 0-10-10v4a6 6 0 0 1 6 6h4z"
                />
            </svg>

            <p className="text-sm font-medium tracking-wide">Cargando datos, che...</p>
            <span className="sr-only">Cargando contenido</span>
        </section>
    )
}

export default Cargando;