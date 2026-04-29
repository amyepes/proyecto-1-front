import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        try {
            const stored = localStorage.getItem('favoritesFruits');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading favorites from localStorage:', error);
            return [];
        }
    });

    // Guardar en localStorage cada vez que cambia favorites
    useEffect(() => {
        try {
            localStorage.setItem('favoritesFruits', JSON.stringify(favorites));
        } catch (error) {
            console.error('Error saving favorites to localStorage:', error);
        }
    }, [favorites]);

    const toggleFavorite = (fruitId) => {
        setFavorites((prev) =>
            prev.includes(fruitId)
                ? prev.filter((id) => id !== fruitId)
                : [...prev, fruitId]
        );
    };

    const isFavorite = (fruitId) => {
        return favorites.includes(fruitId);
    };

    const getFavoriteFruits = (allFruits) => {
        return allFruits.filter((fruit) => favorites.includes(fruit.id));
    };

    const value = {
        favorites,
        toggleFavorite,
        isFavorite,
        getFavoriteFruits,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}
