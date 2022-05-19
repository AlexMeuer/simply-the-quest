import React from "react";
import {
  Badge,
  Box,
  Center,
  CircularProgress,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import TimeAgo from "react-timeago";
import { useParams } from "react-router-dom";
import {
  QuestWithLogForDetailViewQuery,
  useQuestWithLogForDetailViewQuery,
} from "../../generated/graphql";
import { gql } from "@apollo/client";

gql`
  query QuestWithLogForDetailView($slug: String) {
    quest(limit: 1, where: { slug: { _eq: $slug } }) {
      title
      description
      giver
      imageURL
      tags
      log_entries {
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
    return <QuestDetailLoadingState />;
  }

  return <QuestDetail {...data!.quest[0]} />;
};

const QuestDetailLoadingState: React.FC = () => (
  <Center>
    <CircularProgress
      isIndeterminate
      capIsRound
      color={useColorModeValue("cyan.900", "cyan.300")}
      trackColor={useColorModeValue("cyan.300", "cyan.900")}
    />
  </Center>
);

export type QuestDetailProps = QuestWithLogForDetailViewQuery["quest"][0];

export const QuestDetail: React.FC<QuestDetailProps> = ({
  title,
  description,
  imageURL,
  giver,
  tags,
  log_entries,
}) => {
  const bgOverlayStart = useColorModeValue(
    "rgba(255, 255, 255, 0.4)",
    "rgba(0, 0, 0, 0.6)"
  );
  const bgOverlayEnd = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );
  // TODO: dark/light mode values!
  return (
    <Stack w="2xl" bg="gray.700" rounded="2xl">
      <Box
        w="full"
        maxH="12rem"
        roundedTop="2xl"
        p={8}
        style={{
          WebkitMaskImage:
            "-webkit-gradient(linear, left 90%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
        }}
        bg={`url('${imageURL}')`}
        bgSize="cover"
        bgPosition="top"
      >
        <Heading fontSize="2rem">{title}</Heading>
      </Box>
      <Stack px={4} pb={4}>
        <Flex direction="row" justifyContent="end">
          {tags.map((tag: any) => (
            <Badge key={tag} mr={2}>
              {tag}
            </Badge>
          ))}
          <Badge key={giver} variant="outline">
            {giver}
          </Badge>
        </Flex>
        <Text>{description}</Text>
        {log_entries
          .sort((a, b) => b.step - a.step) // TODO: can this sort happen in the gql query??
          .map((entry) => (
            <Stack
              rounded="xl"
              p={4}
              bg={`linear-gradient( ${bgOverlayStart}, ${bgOverlayEnd} ), url('${entry.imageURL}')`}
              bgSize="cover"
              bgPosition="center"
            >
              <Flex direction="row" justifyContent="space-between">
                <Heading as="h3">{entry.title}</Heading>
                <Box alignSelf="end">
                  <Badge colorScheme="green">{entry.status}</Badge>
                </Box>
              </Flex>
              <Text>{entry.body}</Text>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};
