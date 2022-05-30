import { gql } from "@apollo/client";
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
  const onSubmit = React.useCallback(
    (values: FormValues) =>
      createQuest({ variables: values }).then(
        ({ data }) => navigateTo(`/quest/${data?.insert_quests_one?.slug}`) // TODO: handle fail state
      ),
    []
  );
  return (
    <QuestForm
      possibleTags={data?.tags.map(({ name }) => name) ?? []}
      onSubmit={onSubmit}
    />
  );
};
