import React from "react";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AuthGuard } from "../../Auth/Guard";
import { QuestFormNewWrapper } from "./QuestFormNewWrapper";
import { QuestFormEditWrapper } from "./QuestFormEditWrapper";
import { useAllTagsQuery } from "../../../generated/graphql";

export const EditQuestView: React.FC = () => {
  const { slug } = useParams();
  const { data } = useAllTagsQuery();
  const tags = React.useMemo(
    () => data?.tags.map(({ name }) => name) ?? [],
    [data]
  );

  return (
    <AuthGuard>
      <Center flexGrow={1}>
        {slug ? <QuestFormEditWrapper slug={slug} /> : <QuestFormNewWrapper />}
      </Center>
    </AuthGuard>
  );
};
