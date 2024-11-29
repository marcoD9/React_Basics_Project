import { Tag as ATag } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
export const Tag = ({ children, ...props }) => {
  return (
    <Wrap>
      <WrapItem>
        <ATag
          p={2}
          size="sm"
          variant="solid"
          bgColor="blue.300"
          color="white"
          {...props}
        >
          {children}
        </ATag>
      </WrapItem>
    </Wrap>
  );
};
