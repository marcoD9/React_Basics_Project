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
    <Card onClick={() => clickFn(item)}>
      <CardBody>
        <Image src={item.url} />
        <Stack>
          <Heading>{item.label}</Heading>
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
        </Stack>
      </CardBody>
    </Card>
  );
};
