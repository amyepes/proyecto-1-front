

function ErrorPage({ ErrorInfo, onRetry }) {
    return (
        <div className="mx-auto my-4 max-w-[500px] text-center bg-white/2 border border-[rgba(233,69,96,0.2)] rounded-2xl flex flex-col items-center justify-center min-h-[300px] p-6 sm:min-h-[400px] sm:my-8 sm:p-8">
            <div className="text-[4rem] mb-4 animate-pulse [animation-duration:2s]">⚠️</div>
            <h2 className="text-[1.75rem] text-white m-0 mb-4 font-extrabold">¡Oops! Algo salió mal</h2>
            <p className="text-red-brand text-base font-semibold mb-3 break-words">{ErrorInfo}</p>
            <p className="text-[#d0d0d0] text-sm mb-6 leading-6">Verificá tu conexión e intentalo de nuevo, che.</p>

            <button
                onClick={onRetry}
                className="min-w-full sm:min-w-[200px] px-6 py-3 rounded-full font-extrabold text-[#111a2c] transition transform hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(32,198,222,0.3)] hover:shadow-[0_6px_20px_rgba(32,198,222,0.4)] focus-visible:outline-[3px] focus-visible:outline-[rgba(32,198,222,0.85)] focus-visible:outline-offset-2"
                style={{
                    backgroundImage: 'linear-gradient(135deg, #20c6de 0%, #0fb7d4 100%)'
                }}
            >
                Reintenteishon
            </button>
        </div>
    )
}

export default ErrorPage;