import React from "react";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const QuestDetail: React.FC = () => {
  const { slug } = useParams();
  return <Text>This is a placeholder page for the {slug} quest.</Text>;
};
