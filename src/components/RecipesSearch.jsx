import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipesSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  return (
    <>
      <p> ciao </p>
      <RecipeListPage clickFn={clickFn} item={data.hits.recipe} />
    </>
  );
};
