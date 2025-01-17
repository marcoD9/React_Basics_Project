import { Flex, Box, Stack } from "@chakra-ui/react";
import { RecipesList } from "../components/RecipesList";

export const RecipeListPage = ({ item, clickFn }) => {
  return (
    <Box
      py={8}
      bgGradient="linear(to-l,  #FAF5FF,#FFFAF0)"
      borderRadius="lg"
      overflow="hidden"
      minHeight="100vh" // To cover the vh
      width="100vw" // To cover the vw
    >
      <Stack alignItems="center">
        <Flex
          maxH="max-content"
          maxWidth="max-content"
          justifyContent="center"
          gap="8"
          wrap="wrap"
        >
          {item.map((hit) => {
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
