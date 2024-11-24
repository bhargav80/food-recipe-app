import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import RecipeList from '../components/RecipeList';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length ? (
        <RecipeList recipes={favorites} />
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default Favorites;
