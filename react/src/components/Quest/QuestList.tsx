import { useQuery } from "@apollo/client";
import { VStack } from "@chakra-ui/react";
import { Quests, QuestsDocument } from "../../generated/graphql";
import { QuestCard } from "./QuestCard";

export const QuestList: React.FC = () => {
  const { data } = useQuery<{ quests: Quests[] }>(QuestsDocument);
  return (
    <VStack my={8}>
      {data &&
        data.quests.map((quest) => <QuestCard key={quest.slug} {...quest} />)}
    </VStack>
  );
};
