import { Tag as ATag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return <ATag {...props}>{children}</ATag>;
};
