import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import './Card.css';

function Card({ fruta }) {
    return (
        <div className="card">
            <Link to={`/Detalle/${fruta.id}`}>
                <div className="card-image">
                    {fruta.filename && fruta.filename.trim() ? (
                        <img src={fruta.filename} alt={fruta.name} />
                    ) : (
                    <div className="no-image">Imagen sin añadir</div>
                )}
            </div>
            </Link>
            <FavoriteButton fruit={fruta} />
            <h2>{fruta.name}</h2>
            <p><span>Nombre romano:</span> {fruta.roman_name}</p>
            <p><span>Tipo:</span> {fruta.type}</p>
        </div>
    );
}

export default Card;