import {
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { capitalCase } from "change-case";
import React from "react";

export interface QuestCardPreviewProps {
  title: string;
  description: string;
  giver: string;
  imageURL: string;
  tags: string[];
}

export const QuestCardPreview: React.FC<QuestCardPreviewProps> = (props) => {
  const bgOverlayStart = useColorModeValue(
    "rgba(255, 255, 255, 0.4)",
    "rgba(0, 0, 0, 0.6)"
  );
  const bgOverlayEnd = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );
  return (
    <Box
      w="full"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={`linear-gradient( ${bgOverlayStart}, ${bgOverlayEnd} ), url('${props.imageURL}')`}
      bgSize="cover"
      bgPosition="center"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading
          fontSize={["xl", "2xl", "2xl"]}
          color={useColorModeValue("gray.700", "white")}
          _hover={{
            color: useColorModeValue("gray.600", "gray.200"),
            textDecor: "underline",
          }}
        >
          {props.title}
        </Heading>
        <Wrap justify="end">
          {props.tags.map((tag: any) => {
            return <Tag key={tag}>{capitalCase(tag)}</Tag>;
          })}
        </Wrap>
      </Flex>

      <Box mt={2}>
        <Text
          noOfLines={4}
          mt={2}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          {props.description}
        </Text>
      </Box>

      <Flex justifyContent="space-between" alignItems="end" mt={4}>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
          Live Preview
        </Text>
        <Text>{props.giver}</Text>
      </Flex>
    </Box>
  );
};
