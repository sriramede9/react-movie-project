import { createContext, useState, useEffect, useContext, } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

    // State to hold the list of favorite movies
    // Initialize with data from localStorage if available
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Effect to update localStorage whenever favorites change
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Functions to add movies from favorites
    const addToFavorites = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    // Function to remove a movie from favorites
    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    // Function to check if a movie is in favorites
    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    }

    return (
        <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </MovieContext.Provider>
    );
}
