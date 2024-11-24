import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  return recipe ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            {recipe.strInstructions}
          </p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Category: {recipe.strCategory}</h2>
            <h3 className="text-lg font-semibold">Cuisine: {recipe.strArea}</h3>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <p className="text-gray-700 text-xl">Loading...</p>
    </div>
  );
};

export default RecipeDetails;
