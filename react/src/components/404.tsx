import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const AreYouLost: React.FC = () => (
  <VStack>
    <Heading>404</Heading>
    <Text>This is not the quest you are looking for.</Text>
    <Link as={RouterLink} to="/">
      Take me home.
    </Link>
  </VStack>
);
