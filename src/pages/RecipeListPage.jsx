import { Center, Heading, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipesList } from "../components/RecipesList";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Center gap={8} h="100vh" bgColor="blue.300">
      <Heading mb={4}>Recipes</Heading>
      <Flex>
        {data.hits.map((hit) => {
          const recipe = hit.recipe;
          return (
            <RecipesList key={recipe.label} item={recipe} clickFn={clickFn} />
          );
        })}
        ;
      </Flex>
    </Center>
  );
};
