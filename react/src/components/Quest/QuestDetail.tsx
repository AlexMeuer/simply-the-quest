import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  ScaleFade,
  Stack,
  Tag,
  useColorModeValue,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { gql, MutationResult, useMutation } from "@apollo/client";
import { BadState, ErrorState, IndeterminateProgress } from "../common";
import { QuestLogEntryDetail } from "./QuestLogEntryDetail";
import { RewardAccordion } from "./RewardAccordion";
import { QuestDetail as QuestDetailBase } from "../../types/Quest";
import { flattenNestedTags } from "../../util/Tags";
import { useQuestWithLogForDetailViewQuery } from "../../generated/graphql";
import { AreYouLost } from "../404";
import { SafeParseError, z } from "zod";
import { capitalCase } from "change-case";
import { AuthGuard } from "../Auth";
import { RewardModal } from "./RewardModal/RewardModal";
import { NewlineText } from "../common/NewlineText";
import { Reward } from "../../types/Reward";

const QuestDetail = QuestDetailBase.omit({
  slug: true,
  created_at: true,
  updated_at: true,
}).extend({
  id: z.number(),
});
type QuestDetail = z.infer<typeof QuestDetail>;

gql`
  query QuestWithLogForDetailView($slug: String) {
    quests(limit: 1, where: { slug: { _eq: $slug } }) {
      id
      title
      description
      status
      giver
      imageURL
      tags {
        tag_name
      }
      rewards(where: { step_id: { _is_null: true } }) {
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
    id
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

const addRewardMutation = gql`
  mutation AddReward($object: rewards_insert_input!) {
    insert_rewards_one(object: $object) {
      id
      quest_id
      step_id
    }
  }
`;

//? Does this really need it's own hook?
type RewardAdder = (
  reward: Reward,
  questId: number,
  stepId?: number
) => Promise<any>;
function useAddRewardMutation(): [RewardAdder, MutationResult<any>] {
  const [addReward, info] = useMutation(addRewardMutation);
  const mutate = React.useCallback(
    (reward: Reward, questId: number, stepId?: number) =>
      addReward({
        variables: {
          object: {
            name: reward.name,
            description: reward.description,
            type: reward.type,
            rarity: reward.rarity,
            count: reward.count,
            value: reward.value,
            imageURL: reward.imageURL,
            sourceURL: reward.sourceURL,
            quest_id: questId,
            step_id: stepId,
          },
        },
      }),
    [addReward]
  );
  return [mutate, info];
}

export const QuestDetailGraphqlWrapper: React.FC = () => {
  const { slug } = useParams();
  const { data, loading, refetch } = useQuestWithLogForDetailViewQuery({
    variables: { slug },
  });

  const result = React.useMemo(
    () =>
      data && data.quests && data.quests.length
        ? QuestDetail.safeParse(flattenNestedTags(data.quests[0]))
        : ({ success: false, error: {} } as SafeParseError<QuestDetail>),
    [data]
  );

  const [addReward, { data: rewardMutationData }] = useAddRewardMutation();

  React.useEffect(() => {
    refetch();
  }, [rewardMutationData]);

  if (loading) {
    return <IndeterminateProgress />;
  }

  if (!data || !data.quests) {
    return <ErrorState />;
  }

  if (data.quests.length === 0) {
    return <AreYouLost />;
  }

  if (!result.success) {
    return (
      <BadState
        isError
        title="Failed to parse Quest data!"
        subtitle={result.error.toString()}
        imageURL="https://source.unsplash.com/collection/9036356/400x400"
      />
    );
  }

  return <QuestDetailView quest={result.data} onAddReward={addReward} />;
};

export interface QuestDetailViewProps {
  quest: QuestDetail;
  onAddReward: RewardAdder;
}

export const QuestDetailView: React.FC<QuestDetailViewProps> = ({
  quest: {
    id,
    title,
    description,
    imageURL,
    giver,
    tags,
    rewards,
    log_entries,
  },
  onAddReward,
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
  const questRewardModal = useDisclosure();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Center flexGrow={1}>
        <Stack
          my={4}
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
                <Tag key={tag}>{capitalCase(tag)}</Tag>
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
            <AuthGuard>
              <Button onClick={questRewardModal.onOpen}>Add Reward</Button>
            </AuthGuard>
            <NewlineText>{description}</NewlineText>
            {log_entries.map((entry, i) => (
              <ScaleFade key={entry.step} delay={i * 0.1} in>
                <QuestLogEntryDetail {...entry} />
              </ScaleFade>
            ))}
          </Stack>
        </Stack>
      </Center>
      <RewardModal
        isOpen={questRewardModal.isOpen}
        onClose={questRewardModal.onClose}
        onSubmit={(reward) => {
          if (reward.id !== undefined) {
            throw new Error("Updating rewards is not yet implemented!");
          }
          // TODO: implement reward updating, and adding rewards to steps.
          return onAddReward(reward, id).then();
        }}
      />
    </>
  );
};
