import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { RecipesList } from "./RecipesList";

export const RecipesSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase(), 0);
  });
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <>
      <label>Search for recipes:</label>
      <TextInput changeFn={handleChange} />
      <p> {searchField} </p>
      <RecipesList clickFn={clickFn} item={matchedRecipes} />
    </>
  );
};
