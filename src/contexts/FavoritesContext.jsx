import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        try {
            const raw = localStorage.getItem('favoritesFruits');
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];

            // Migration: if stored items are primitives (ids), convert to objects with id only
            if (parsed.length > 0 && (typeof parsed[0] === 'number' || typeof parsed[0] === 'string')) {
                return parsed.map((id) => ({ id }));
            }

            // If objects with id exist, keep as is
            return parsed.map((item) => (item && item.id ? item : null)).filter(Boolean);
        } catch (error) {
            console.error('Error loading favorites from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('favoritesFruits', JSON.stringify(favorites));
        } catch (error) {
            console.error('Error saving favorites to localStorage:', error);
        }
    }, [favorites]);

    const addFavorite = (fruitObj) => {
        if (!fruitObj || !fruitObj.id) return;
        setFavorites((prev) => (prev.some((f) => f.id === fruitObj.id) ? prev : [...prev, fruitObj]));
    };

    const removeFavorite = (fruitId) => {
        setFavorites((prev) => prev.filter((f) => f.id !== fruitId));
    };

    const toggleFavorite = (fruitObj) => {
        if (!fruitObj || !fruitObj.id) return;
        setFavorites((prev) => (prev.some((f) => f.id === fruitObj.id) ? prev.filter((f) => f.id !== fruitObj.id) : [...prev, fruitObj]));
    };

    const isFavorite = (fruitId) => favorites.some((f) => f.id === fruitId);

    const getFavoriteFruits = (allFruits) => allFruits.filter((fruit) => favorites.some((f) => f.id === fruit.id));

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        getFavoriteFruits,
    };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
