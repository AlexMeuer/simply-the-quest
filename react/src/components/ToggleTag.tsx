import { Tag } from "@chakra-ui/react";
import React from "react";

export interface ToggleTagProps {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const ToggleTag: React.FC<ToggleTagProps> = ({
  isSelected,
  onClick,
  children,
}) => (
  <Tag
    colorScheme={isSelected ? "blue" : "gray"}
    border="1px"
    borderColor="transparent"
    onClick={onClick}
    cursor="pointer"
    _hover={{
      borderColor: isSelected ? "blue.500" : "gray.500",
    }}
  >
    {children}
  </Tag>
);
