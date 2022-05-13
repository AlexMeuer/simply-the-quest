import React from "react";
import TimeAgo from "react-timeago";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Quest } from "../generated/graphql";

type QuestCardProps = Quest;

export const QuestCard: React.FC<QuestCardProps> = ({
  title,
  description,
  giver,
  updated_at,
}) => (
  <VStack
    p={4}
    w={["100%", "100%", "80%", "60%"]}
    spacing={2}
    backgroundColor="rosybrown"
    borderRadius={16}
  >
    <Heading size="md">{title}</Heading>
    <Text noOfLines={2}>{description}</Text>
    <HStack spacing={2} justifyContent="space-between" alignItems="flex-end">
      <Text>{giver}</Text>
      <Text>
        <TimeAgo live date={updated_at} />
      </Text>
    </HStack>
  </VStack>
);
