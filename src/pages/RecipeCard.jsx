import {
  Image,
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
  Container,
  Center,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/Tag";
import { MacrosList } from "../components/MacrosList";

export const RecipeCard = ({ item, clickFn }) => {
  return (
    <Container
      maxW="container.lg"
      borderRadius="xl"
      bgGradient="linear(to-l,  #63b3ed,#bee3f8)"
      maxH="100%"
      minHeight="100vh" // To cover the vh
      width="100vw" // To cover the vw
    >
      <Center my={2} h="30vh">
        {" "}
        <Image
          borderRadius="xl"
          src={item.image}
          h="100%"
          w="100%"
          objectFit="cover"
        />
      </Center>
      <Grid
        my={2}
        templateColumns="repeat(2, 1fr)"
        templateRows=" 1fr"
        templateAreas="
                        'content1 content2'"
        bgGradient="linear(to-l,  #63b3ed,#bee3f8)"
      >
        <GridItem gridArea="content1">
          <Flex p={4} m={1} flexDirection="column">
            <Text fontWeight="light">{item.mealType}</Text>
            <Heading size="md">{item.label}</Heading>
            <Text m={4}>Total Cooking Time: {item.totalTime} Minutes</Text>
            <Text m={4}>Servings: {item.yield}</Text>
            <Text m={4}> Ingredients:</Text>
            {item.ingredientLines.map((line) => (
              <Text mx={8} key={line}>
                {" "}
                {line}{" "}
              </Text>
            ))}
          </Flex>
        </GridItem>
        <GridItem gridArea="content2">
          <Flex p={4} flexDirection="column">
            <Text>Health Labels: </Text>
            <Flex p={4} m={2} flexDirection="row" wrap="wrap" gap={2}>
              {item.healthLabels.map((healthLabel) => (
                <Tag bg="#2c5282" key={healthLabel}>
                  {healthLabel}
                </Tag>
              ))}{" "}
            </Flex>
            {item.dietLabels.length > 0 && (
              <>
                <Text>Diet: </Text>
                <Flex p={4} m={2} flexDirection="row" wrap="wrap" gap={2}>
                  {item.dietLabels.map((dietLabel) => (
                    <Tag key={dietLabel} bg="#38A169">
                      {dietLabel}
                    </Tag>
                  ))}{" "}
                </Flex>
              </>
            )}
            {item.cautions.length > 0 && (
              <>
                <Text>Cautions: </Text>
                <Flex p={4} m={4} flexDirection="row" wrap="wrap" gap={2}>
                  {item.cautions.map((caution) => (
                    <Tag key={caution} bgColor="#E53E3E">
                      {caution}
                    </Tag>
                  ))}
                </Flex>
              </>
            )}
            <Flex p={4} flexDir="column">
              <MacrosList item={item} />
            </Flex>
            <Flex>
              <Button
                m={2}
                p={4}
                w="fit-content"
                onClick={() => clickFn()}
                bg="white"
                _hover={{
                  bgGradient: "linear(to-l, #FBB6CE, #FED7E2)",
                }}
              >
                Back to the list
              </Button>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};
