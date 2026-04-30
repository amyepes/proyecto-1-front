

import './Error.css';

function ErrorPage({ ErrorInfo, onRetry }) {
    return (
        <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h2>¡Oops! Algo salió mal</h2>
            <p className="error-message">{ErrorInfo}</p>
            <p className="error-hint">Verificá tu conexión e intentalo de nuevo, che.</p>
            <button className="retry-btn" onClick={onRetry}>
                Reintenteishon
            </button>
        </div>
    )
}

export default ErrorPage;