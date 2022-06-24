import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export interface NewlineTextProps {
  children: string;
}

/**
 * A component that renders a string as a series of lines, breaking on newline characters (\n).
 */
export const NewlineText: React.FC<NewlineTextProps> = ({ children }) => (
  <Stack direction="column">
    {children.split("\n").map((line, i) => (
      <Text key={i}>{line}</Text>
    ))}
  </Stack>
);
