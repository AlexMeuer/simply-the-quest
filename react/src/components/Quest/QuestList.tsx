import { useQuery } from "@apollo/client";
import { VStack } from "@chakra-ui/react";
import { Quests, QuestsDocument } from "../../generated/graphql";
import { ErrorState } from "../common/ErrorState";
import { IndeterminateProgress } from "../common/IndeterminateProgress";
import { QuestCard } from "./QuestCard";

export const QuestList: React.FC = () => {
  const { data, loading } = useQuery<{ quests: Quests[] }>(QuestsDocument);
  if (loading) {
    return <IndeterminateProgress />;
  }

  if (!data || !data.quests || data.quests.length < 1) {
    return <ErrorState />;
  }

  return (
    <VStack my={8}>
      {data.quests.map((quest) => (
        <QuestCard key={quest.slug} {...quest} />
      ))}
    </VStack>
  );
};
