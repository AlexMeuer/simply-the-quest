import {
  useColorModeValue,
  Flex,
  Heading,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

export interface NavHeaderProps {
  title: string;
  children: React.ReactNode;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ title, children }) => (
  <HStack
    w="full"
    h="4.5rem"
    px="6"
    align="center"
    justify="space-between"
    bg={useColorModeValue("white", "gray.900")}
    color={useColorModeValue("gray.900", "gray.400")}
    shadow="md"
  >
    <Heading>
      <Link as={RouterLink} to="/">
        {title}
      </Link>
    </Heading>
    <HStack>{children}</HStack>
  </HStack>
);
