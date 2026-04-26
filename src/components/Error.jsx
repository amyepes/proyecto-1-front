

function ErrorPage({ErrorInfo}) {
    return (
        <>
            {/* Icono de error */}
            <p>{ErrorInfo}</p>
            <p>Verificá tu conexión e intentalo de nuevo, che.</p>
            <button>Reintenteishon</button>
        </>
    )
}

export default ErrorPage;