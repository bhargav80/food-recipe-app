import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from '../context/FavoritesContext';
const RecipeCard = ({ recipe }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
 const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);
  const truncateText = (text, length) => {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-32 object-cover"
      />
      <div className="p-2">
        <h5 className="text-sm font-semibold mb-2">{recipe.strMeal}</h5>
        <p className="text-xs text-gray-600 mb-2">
          {truncateText(recipe.strInstructions, 80)}
        </p>
        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="inline-block px-2 py-1 bg-blue-500 text-white rounded text-s hover:bg-blue-600 transition"
        >
          View Recipe
        </Link>
        <button  onClick={() => (isFavorite ? removeFavorite(recipe.idMeal) : addFavorite(recipe))}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      </div>
    </div>
  );
};

export default RecipeCard;
