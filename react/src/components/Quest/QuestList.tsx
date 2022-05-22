import { useQuery } from "@apollo/client";
import { Stack } from "@chakra-ui/react";
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
    <Stack my={8} px={[1, 4, 0]}>
      {data.quests.map((quest) => (
        <QuestCard key={quest.slug} {...quest} />
      ))}
    </Stack>
  );
};
