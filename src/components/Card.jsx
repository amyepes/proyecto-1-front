import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

function Card({ fruta }) {
    return (
        <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 overflow-hidden transition-all duration-300 flex flex-col hover:bg-white/8 hover:border-blue-brand/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-brand/20">
            <Link to={`/Detalle/${fruta.id}`}>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-black/30 flex items-center justify-center">
                    {fruta.filename && fruta.filename.trim() ? (
                        <img src={fruta.filename} alt={fruta.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="text-sub-text text-sm text-center p-4">Imagen sin añadir</div>
                    )}
                </div>
            </Link>
            <FavoriteButton fruit={fruta} />
            <h2 className="text-xl font-normal mb-3 text-white leading-relaxed">{fruta.name}</h2>
            <p className="text-sm text-slate-300 mb-3 text-left"><span className="font-semibold text-blue-brand">Nombre romano:</span> {fruta.roman_name}</p>
            <p className="text-sm text-slate-300 mb-3 text-left"><span className="font-semibold text-blue-brand">Tipo:</span> {fruta.type}</p>
        </div>
    );
}

export default Card;