import { gql } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useQuestForEditQuery,
  useUpdateQuestByPkMutation,
} from "../../../generated/graphql";
import { ErrorState, IndeterminateProgress } from "../../common";
import { FormValues, QuestForm } from "./QuestForm";

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
          ...rewardWithId
        }
      }
      tags {
        tag_name
      }
    }
    tags {
      name
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

gql`
  mutation UpdateQuestByPK(
    $id: Int!
    $title: String!
    $description: String!
    $giver: String!
    $imageURL: String!
  ) {
    update_quests_by_pk(
      pk_columns: { id: $id }
      _set: {
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

export interface QuestFormEditWrapperProps {
  slug: string;
}

export const QuestFormEditWrapper: React.FC<QuestFormEditWrapperProps> = ({
  slug,
}) => {
  const toast = useToast();
  const navigateTo = useNavigate();
  const { data, error, loading } = useQuestForEditQuery({
    variables: { slug },
  });

  const [mutateQuest, mutationState] = useUpdateQuestByPkMutation();

  const [initialData, questId] = React.useMemo((): [
    FormValues | undefined,
    number
  ] => {
    const quest = data?.quests[0];
    if (!quest) {
      return [undefined, -1];
    }
    return [
      {
        ...quest,
        tags: quest.tags.map((tag) => tag.tag_name),
        imageURL: quest.imageURL ?? "",
      },
      quest.id,
    ];
  }, [data]);

  const onSubmit = React.useCallback(
    (values: FormValues) =>
      mutateQuest({
        variables: { id: questId, ...values },
        context: { headers: { "x-hasura-role": "quest_admin" } },
      })
        .then(() => navigateTo(`/quest/${slug}`))
        .catch((e) =>
          toast({
            title: "Failed to create quest!",
            description: e.message || JSON.stringify(e),
            status: "error",
            isClosable: true,
          })
        ),
    [questId]
  );

  if (loading) {
    return <IndeterminateProgress />;
  }

  if (error || questId < 0) {
    return <ErrorState />;
  }

  return (
    <QuestForm
      initialValues={initialData}
      possibleTags={data?.tags.map(({ name }) => name) ?? []}
      onSubmit={onSubmit}
    />
  );
};
