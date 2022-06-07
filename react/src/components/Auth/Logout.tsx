import React from "react";
import { Flex, useColorModeValue, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export interface LogoutViewProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export const LogoutView: React.FC<LogoutViewProps> = ({
  children,
  onLogout,
}) => (
  <Flex
    direction="column"
    alignItems="center"
    my={4}
    p={4}
    bg={useColorModeValue("gray.300", "gray.700")}
    rounded="2xl"
  >
    {children}
    <Button p="1em" my={4} fontSize="1.5rem" onClick={onLogout}>
      Logout
    </Button>
    <RouterLink to="/">Cancel</RouterLink>
  </Flex>
);
