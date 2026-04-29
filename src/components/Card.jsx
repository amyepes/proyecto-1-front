import useFavorites from '../hooks/useFavorites';

function Card({ fruta }) {
    const { isFavorite, toggleFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(fruta.id);

    return (
        <div className="card">
            <div className="card-image">
                {fruta.filename && fruta.filename.trim() ? (
                    <img src={fruta.filename} alt={fruta.name} />
                ) : (
                    <div className="no-image">Imagen sin añadir</div>
                )}
            </div>
            <button
                className={`favorite-btn ${isCurrentlyFavorite ? 'active' : ''}`}
                onClick={() => toggleFavorite(fruta)}
                title={isCurrentlyFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
                ★
            </button>
            <h2>{fruta.name}</h2>
            <p><span>Nombre romano:</span> {fruta.roman_name}</p>
            <p><span>Tipo:</span> {fruta.type}</p>
        </div>
    );
}

export default Card;