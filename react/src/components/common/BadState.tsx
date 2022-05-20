import React from "react";
import {
  Heading,
  Text,
  VStack,
  Image,
  Button,
  Container,
  Box,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export interface BadStateProps {
  isError?: boolean;
  title: string;
  subtitle: string;
  imageURL: string;
}

export const BadState: React.FC<BadStateProps> = ({
  isError,
  title,
  subtitle,
  imageURL,
}) => (
  <VStack>
    <Heading color={isError ? "red.500" : undefined}>{title}</Heading>
    <Text>{subtitle}</Text>
    <Box h="400">
      <Image rounded="2xl" src={imageURL} />
    </Box>
    <Button as={RouterLink} to="/">
      Take me home.
    </Button>
  </VStack>
);
