import {
  Card,
  CardBody,
  Image,
  Stack,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Tag } from "./ui/Tag";

export const RecipesList = ({ item, clickFn }) => {
  return (
    <Card
      h={{ base: 16, sm: "xl" }}
      w={{ base: 80, sm: 96 }}
      mt={{ base: 48, sm: 0 }}
      mb={{ base: 80, sm: 0 }}
      borderRadius="xl"
      bgGradient="linear(to-l,  #63b3ed,#bee3f8)"
      shadow="lg"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.09)" }}
    >
      <CardBody
        bgGradient="linear(to-l,  #63b3ed,#bee3f8)"
        textAlign="center"
        borderRadius="xl"
      >
        <Image
          src={item.image}
          objectFit="cover"
          width="100%"
          height="200px"
          borderRadius="xl"
        />
        <Stack m="2" spacing="6">
          <Text fontWeight="light">{item.mealType}</Text>
          <Heading fontWeight="bold" fontSize={{ base: 14, sm: 18 }}>
            {item.label}
          </Heading>
          <Text fontWeight="heavy">Dish: {item.dishType}</Text>
          <Flex gap={4}>
            {item.healthLabels.slice(0, 2).map((healthLabel) => (
              <Tag bg="#2c5282" key={healthLabel}>
                {healthLabel}
              </Tag>
            ))}
          </Flex>
          <Flex gap={4}>
            {item.dietLabels.map((dietLabel) => (
              <Tag key={dietLabel} bg="#38A169">
                {dietLabel}
              </Tag>
            ))}
          </Flex>
          <Flex gap={4}>
            {" "}
            {item.cautions.slice(0, 2).map((caution) => (
              <Tag bgColor="#E53E3E" key={caution}>
                {caution}
              </Tag>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
