import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  QuestWithLogForDetailViewQuery,
  useQuestWithLogForDetailViewQuery,
} from "../../generated/graphql";
import { gql } from "@apollo/client";
import { ErrorState, IndeterminateProgress } from "../common";
import { QuestLogEntryDetail } from "./QuestLogEntryDetail";
import { RewardAccordion } from "./RewardAccordion";

gql`
  query QuestWithLogForDetailView($slug: String) {
    quests(limit: 1, where: { slug: { _eq: $slug } }) {
      title
      description
      giver
      imageURL
      tags
      rewards {
        ...reward
      }
      log_entries(order_by: { step: desc }) {
        title
        body
        status
        step
        created_at
        imageURL
        rewards {
          ...reward
        }
      }
    }
  }
  fragment reward on rewards {
    name
    description
    type
    rarity
    count
    value
    imageURL
    sourceURL
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
  rewards,
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
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Stack
        bg={useColorModeValue("gray.300", "gray.700")}
        rounded={["none", "none", "2xl"]}
      >
        <Box
          maxH="12rem"
          roundedTop={["none", "none", "2xl"]}
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
          <Wrap direction="row" justify="end">
            {tags.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            <Tag key={giver} variant="outline">
              {giver}
            </Tag>
          </Wrap>
          {rewards.length && (
            <Stack rounded="lg" border="1px" borderColor="gray.500">
              <Heading fontSize="md" as="h2" mx="auto" mt={1}>
                Possible Rewards
              </Heading>
              <RewardAccordion rewards={rewards} />
            </Stack>
          )}
          <Text>{description}</Text>
          {log_entries.map((entry) => (
            <QuestLogEntryDetail key={entry.step} {...entry} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
