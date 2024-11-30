import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { RecipeListPage } from "../pages/RecipeListPage";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const RecipesSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const matchedRecipes = data.hits.filter((hit) => {
    return hit.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <Box
      bgGradient="linear(to-l,  #FAF5FF,#FFFAF0)"
      borderRadius="lg"
      overflow="hidden"
    >
      <Stack mb={[-16, 12]} alignItems="center">
        <Heading
          bgClip="text"
          fontSize={[18, 32, 40]}
          bgGradient="linear(to-l, #3182ce,#2c5282)"
        >
          Recipe Checker
        </Heading>
        <Text fontWeight="bolder">Search for recipes:</Text>
        <Text fontWeight="light">{searchField}</Text>
        <TextInput changeFn={handleChange} />
        <RecipeListPage item={matchedRecipes} clickFn={clickFn} />
      </Stack>
    </Box>
  );
};
