import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children})=>{
    const [favorites,setFavorites] = useState([]);
    const addFavorite = (recipe)=>{
        setFavorites((prev)=>[...prev,recipe])
    };
    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((recipe) => recipe.idMeal !== id));
      };
      return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
          {children}
        </FavoritesContext.Provider>
      );
}