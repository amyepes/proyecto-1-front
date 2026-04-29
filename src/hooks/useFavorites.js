import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider');
    }
    return context;
}

export default useFavorites;
