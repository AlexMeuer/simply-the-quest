import React from "react";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  QuestWithLogForDetailViewQuery,
  useQuestWithLogForDetailViewQuery,
} from "../../generated/graphql";
import { gql } from "@apollo/client";
import { IndeterminateProgress } from "../common/IndeterminateProgress";
import { ErrorState } from "../common/ErrorState";
import { StatusBadge } from "../common/StatusBadge";
import { QuestLogEntryDetail } from "./QuestLogEntryDetail";

gql`
  query QuestWithLogForDetailView($slug: String) {
    quests(limit: 1, where: { slug: { _eq: $slug } }) {
      title
      description
      giver
      imageURL
      tags
      log_entries(order_by: { step: desc }) {
        title
        body
        status
        step
        created_at
        imageURL
      }
    }
  }
`;

export const QuestDetailGraphqlWrapper: React.FC = () => {
  const { slug } = useParams();
  const { data, loading } = useQuestWithLogForDetailViewQuery({
    variables: { slug },
  });

  if (loading) {
    return <IndeterminateProgress />;
  }

  if (!data || !data.quests || data.quests.length < 1) {
    return <ErrorState />;
  }

  return <QuestDetail {...data.quests[0]} />;
};

export type QuestDetailProps = QuestWithLogForDetailViewQuery["quests"][0];

export const QuestDetail: React.FC<QuestDetailProps> = ({
  title,
  description,
  imageURL,
  giver,
  tags,
  log_entries,
}) => {
  const bgHeaderTintStart = useColorModeValue(
    "rgba(255, 255, 255, 0.0)",
    "rgba(20, 10, 0, 0.0)"
  );
  const bgHeaderTintCenter = useColorModeValue(
    "rgba(255, 255, 255, 0.5)",
    "rgba(20, 10, 0, 0.4)"
  );
  const bgHeaderTintEnd = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(20, 10, 0, 0.5)"
  );
  return (
    <Stack
      w="full"
      bg={useColorModeValue("gray.300", "gray.700")}
      rounded="2xl"
    >
      <Box
        maxH="12rem"
        roundedTop="2xl"
        p={8}
        style={{
          WebkitMaskImage:
            "-webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
        }}
        bg={`linear-gradient( ${bgHeaderTintStart}, ${bgHeaderTintCenter}, ${bgHeaderTintEnd} ), url('${imageURL}')`}
        bgSize="cover"
        bgPosition="top"
      >
        <Heading fontSize="2rem">{title}</Heading>
      </Box>
      <Stack px={4} pb={4}>
        <Flex direction="row" justifyContent="end">
          {tags.map((tag: string) => (
            <Badge key={tag} mr={2}>
              {tag}
            </Badge>
          ))}
          <Badge key={giver} variant="outline">
            {giver}
          </Badge>
        </Flex>
        <Text>{description}</Text>
        {log_entries.map((entry) => (
          <QuestLogEntryDetail key={entry.step} {...entry} />
        ))}
      </Stack>
    </Stack>
  );
};
