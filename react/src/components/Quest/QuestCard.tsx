import React from "react";
import TimeAgo from "react-timeago";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  LinkOverlay,
  LinkBox,
  Wrap,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ToggleTag } from "../ToggleTag";
import { Quest } from "../types/Quest";
import { capitalCase } from "change-case";

export interface QuestCardProps extends Quest {
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  title,
  description,
  giver,
  tags,
  updated_at,
  imageURL,
  slug,
  selectedTags,
  onTagClick,
}) => {
  const bgOverlayStart = useColorModeValue(
    "rgba(255, 255, 255, 0.4)",
    "rgba(0, 0, 0, 0.6)"
  );
  const bgOverlayEnd = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );
  return (
    <LinkBox
      as="article"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={`linear-gradient( ${bgOverlayStart}, ${bgOverlayEnd} ), url('${imageURL}')`}
      bgSize="cover"
      bgPosition="center"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontSize={["xl", "2xl", "2xl"]}>
          <LinkOverlay
            as={RouterLink}
            to={`/quest/${slug}`}
            color={useColorModeValue("gray.700", "white")}
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {title}
          </LinkOverlay>
        </Heading>
        <Wrap justify="end" zIndex={1}>
          {tags.map((tag: any) => {
            return (
              <ToggleTag
                key={tag}
                isSelected={selectedTags.includes(tag)}
                onClick={() => onTagClick(tag)}
              >
                {capitalCase(tag)}
              </ToggleTag>
            );
          })}
        </Wrap>
      </Flex>

      <Box mt={2}>
        <Text
          noOfLines={4}
          mt={2}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          {description}
        </Text>
      </Box>

      <Flex justifyContent="space-between" alignItems="end" mt={4}>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
          <TimeAgo live date={updated_at} />
        </Text>
        <Text>{giver}</Text>
      </Flex>
    </LinkBox>
  );
};
