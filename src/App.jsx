import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipeCard } from "./pages/RecipeCard";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div>
      {selectedRecipe ? (
        <RecipeCard item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </div>
  );
};
