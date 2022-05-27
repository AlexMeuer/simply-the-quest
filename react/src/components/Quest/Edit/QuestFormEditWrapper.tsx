import { gql } from "@apollo/client";
import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useQuestForEditQuery } from "../../../generated/graphql";
import { IndeterminateProgress } from "../../common";
import { QuestForm } from "./QuestForm";

gql`
  query QuestForEdit($slug: String!) {
    quests(where: { slug: { _eq: $slug } }, limit: 1) {
      id
      title
      description
      giver
      imageURL
      isPublished
      rewards {
        ...rewardWithId
      }
      log_entries {
        step
        title
        body
        status
        imageURL
        rewards {
          ...reward
        }
      }
    }
  }
  fragment rewardWithId on rewards {
    id
    name
    description
    rarity
    count
    value
    type
    imageURL
    sourceURL
  }
`;

export interface QuestFormEditWrapperProps {
  slug: string;
}

export const QuestFormEditWrapper: React.FC<QuestFormEditWrapperProps> = ({
  slug,
}) => {
  const { data, error, loading } = useQuestForEditQuery({
    variables: { slug },
  });
  return (
    <Stack>
      <Text>{JSON.stringify(data)}</Text>
      <Text>{error?.message}</Text>
      {loading ? <IndeterminateProgress /> : <QuestForm />}
    </Stack>
  );
};
