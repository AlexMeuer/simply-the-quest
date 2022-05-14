import { useQuery } from "@apollo/client";
import { VStack } from "@chakra-ui/react";
import { Quest, QuestsDocument } from "../../generated/graphql";
import { QuestCard } from "./QuestCard";

export const QuestList: React.FC = () => {
  const { data } = useQuery<{ quest: Quest[] }>(QuestsDocument);
  return (
    <VStack>
      {data && data.quest.map((quest) => <QuestCard {...quest} />)}
    </VStack>
  );
};
