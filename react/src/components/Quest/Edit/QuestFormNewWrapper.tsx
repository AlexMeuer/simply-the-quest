import { gql } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useAllTagsQuery,
  useCreateQuestMutation,
} from "../../../generated/graphql";
import { FormValues, QuestForm } from "./QuestForm";

gql`
  query AllTags {
    tags {
      name
    }
  }
`;

gql`
  mutation CreateQuest(
    $title: String!
    $description: String!
    $giver: String!
    $imageURL: String!
  ) {
    insert_quests_one(
      object: {
        title: $title
        description: $description
        giver: $giver
        imageURL: $imageURL
      }
    ) {
      slug
    }
  }
`;

export const QuestFormNewWrapper: React.FC = () => {
  const navigateTo = useNavigate();
  const { data } = useAllTagsQuery();
  const [createQuest] = useCreateQuestMutation();
  const toast = useToast();
  const onSubmit = React.useCallback(
    (values: FormValues) =>
      createQuest({
        variables: values,
        context: { headers: { "x-hasura-role": "quest_admin" } },
      })
        .then(({ data }) =>
          navigateTo(`/quest/${data?.insert_quests_one?.slug}`)
        )
        .catch((e) =>
          toast({
            title: "Failed to create quest!",
            description: e.message || JSON.stringify(e),
            status: "error",
            isClosable: true,
          })
        ),
    [toast]
  );
  return (
    <QuestForm
      possibleTags={data?.tags.map(({ name }) => name) ?? []}
      onSubmit={onSubmit}
    />
  );
};
