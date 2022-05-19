import React from "react";
import TimeAgo from "react-timeago";
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Quest } from "../../generated/graphql";
import { useViewportScroll } from "framer-motion";

type QuestCardProps = Quest;

export const QuestCard: React.FC<QuestCardProps> = ({
  title,
  description,
  giver,
  tags,
  updated_at,
  imageURL,
  slug,
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
      w={["2xl", "80%", "100%"]}
      mx="auto"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={`linear-gradient( ${bgOverlayStart}, ${bgOverlayEnd} ), url('${imageURL}')`}
      bgSize="cover"
      bgPosition="center"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <LinkOverlay
          as={RouterLink}
          to={`/quest/${slug}`}
          fontSize="2xl"
          color={useColorModeValue("gray.700", "white")}
          fontWeight="700"
          _hover={{
            color: useColorModeValue("gray.600", "gray.200"),
            textDecor: "underline",
          }}
        >
          {title}
        </LinkOverlay>
        <HStack>
          {tags.map((tag: any) => (
            <Link
              key={tag}
              as={RouterLink}
              to={`/quest/tag/${tag}`}
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{ bg: "gray.500" }}
            >
              {tag}
            </Link>
          ))}
        </HStack>
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
