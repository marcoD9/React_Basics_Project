import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/Tag";

export const RecipeCard = ({ item, clickFn }) => {
  return (
    <Center flexDirection="column" bg="red">
      <Card borderRadius="xl" w="3xl" h="3xl" bg="yellow">
        <CardBody>
          <Image h="md" w="100%" src={item.url} borderRadius="xl" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.label}</Heading>
            <Text>{item.dishtype}</Text>
            <Flex>
              {item.healthLabels.map((healthLabel) => (
                <Tag key={healthLabel}>{healthLabel}</Tag>
              ))}
            </Flex>
            <Flex>
              {item.cautions.map((caution) => (
                <Tag key={caution}>{caution}</Tag>
              ))}
            </Flex>
            <Button w="fit-content" onClick={() => clickFn()}>
              Back to the list
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
