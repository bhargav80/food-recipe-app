import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {recipes.map((recipe) => (
        <div className="flex-shrink-0 w-1/5">
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
