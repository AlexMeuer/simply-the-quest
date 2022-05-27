import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AuthGuard } from "../../Auth/Guard";
import { QuestFormNewWrapper } from "./QuestFormNewWrapper";
import { QuestFormEditWrapper } from "./QuestFormEditWrapper";

export const EditQuestView: React.FC = () => {
  const { slug } = useParams();
  return (
    <AuthGuard>
      <Center flexGrow={1}>
        <Heading>
          {slug ? (
            <QuestFormEditWrapper slug={slug} />
          ) : (
            <QuestFormNewWrapper />
          )}
        </Heading>
      </Center>
    </AuthGuard>
  );
};
