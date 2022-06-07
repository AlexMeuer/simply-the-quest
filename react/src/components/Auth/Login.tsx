import React from "react";
import { Flex, useColorModeValue, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { IoLogoDiscord } from "react-icons/io5";

export interface LoginViewProps {
  onLoginWithDiscord: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginWithDiscord }) => (
  <Flex
    direction="column"
    alignItems="center"
    my={4}
    p={4}
    bg={useColorModeValue("gray.300", "gray.700")}
    rounded="2xl"
  >
    <Heading>Login</Heading>
    <Button
      bg="#5865F2"
      _hover={{ bg: "#5865F2" }}
      p="1em"
      color="white"
      my={4}
      leftIcon={<IoLogoDiscord />}
      fontSize="1.5rem"
      onClick={onLoginWithDiscord} // Discord is supported but not listed in the sdk typings.
    >
      Login with Discord
    </Button>
    <RouterLink to="/">Cancel</RouterLink>
  </Flex>
);
