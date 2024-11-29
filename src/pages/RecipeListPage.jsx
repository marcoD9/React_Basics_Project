import { Heading, Flex, Box, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipesList } from "../components/RecipesList";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Box
      bgGradient="linear(to-l,  #FAF5FF,#FFFAF0)"
      borderRadius="lg"
      overflow="hidden"
    >
      <Stack alignItems="center">
        <Heading
          p={2}
          mb={[-48, 12]}
          bgClip="text"
          bgGradient="linear(to-l, #3182ce,#2c5282)"
        >
          Recipes
        </Heading>

        <Flex
          maxH="max-content"
          maxWidth="max-content"
          justifyContent="center"
          gap="8"
          wrap="wrap"
        >
          {data.hits.map((hit) => {
            const recipe = hit.recipe;
            return (
              <RecipesList key={recipe.label} item={recipe} clickFn={clickFn} />
            );
          })}
          ;
        </Flex>
      </Stack>
    </Box>
  );
};
