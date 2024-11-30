import { Input } from "@chakra-ui/react";
export const TextInput = ({ changeFn }) => {
  return (
    <>
      <Input
        boxShadow="xs"
        p="6"
        rounded="md"
        bg="white"
        width={200}
        my={6}
        borderColor={"brown.400"}
        onChange={changeFn}
      ></Input>
    </>
  );
};
