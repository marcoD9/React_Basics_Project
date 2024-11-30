import { useState } from "react";
import { RecipeCard } from "./pages/RecipeCard";
import { RecipesSearch } from "./components/RecipesSearch";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div>
      {selectedRecipe ? (
        <RecipeCard item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipesSearch clickFn={setSelectedRecipe} />
        </>
      )}
    </div>
  );
};
