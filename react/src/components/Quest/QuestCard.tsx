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
  Badge,
  Spacer,
  chakra,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { capitalCase } from "change-case";
import { QuestBase } from "../../types/Quest";
import { WithFlatTags } from "../../util/Tags";
import { ToggleTag, StatusBadge } from "../common";
import { isValidMotionProp, motion } from "framer-motion";
import { Status } from "../../types/Status";
import { AnimatedBox } from "../common/AnimatedBox";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export interface QuestCardProps extends QuestBase, WithFlatTags {
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  title,
  description,
  status,
  giver,
  tags,
  log_entries,
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
      as={AnimatedBox}
      w="full"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={`linear-gradient( ${bgOverlayStart}, ${bgOverlayEnd} ), url('${imageURL}')`}
      bgSize="cover"
      bgPosition="center"
      whileHover={{ scale: 1.02 }}
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

      <Flex alignItems="baseline" mt={4}>
        <StatusBadge
          animate
          status={status}
          logEntries={log_entries}
          px={2}
          py={1}
        />
        <Spacer />
        <Text>{giver}</Text>
      </Flex>
    </LinkBox>
  );
};
