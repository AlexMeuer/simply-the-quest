import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { StatusBadge } from "../common/StatusBadge";
import colors from "../../theme/colors";
import tinycolor, { TinyColor } from "@ctrl/tinycolor";
import { QuestLogEntry } from "../../types/QuestLogEntry";
import { RewardAccordion } from "./RewardAccordion";

export type QuestLogEntryDetailProps = QuestLogEntry;

const tints: Record<string, TinyColor[]> = {
  success: [
    tinycolor(colors.gray[800]).setAlpha(0.7),
    tinycolor(colors.gray[800]).setAlpha(0.7),
    tinycolor(colors.green[800]).setAlpha(0.6),
  ],
  fail: [
    tinycolor(colors.red[500]).setAlpha(0.4),
    tinycolor(colors.gray[800]).setAlpha(0.7),
    tinycolor(colors.red[800]).setAlpha(0.9),
  ],
  expired: [
    tinycolor(colors.purple[900]).setAlpha(0.8),
    tinycolor(colors.gray[800]).setAlpha(0.9),
    tinycolor(colors.purple[700]).setAlpha(0.9),
  ],
  disabled: [
    tinycolor(colors.gray[800]),
    tinycolor(colors.gray[900]).setAlpha(0.6),
    tinycolor(colors.gray[800]),
  ],
  active: [
    tinycolor(colors.gray[800]).setAlpha(0.6),
    tinycolor(colors.gray[900]).setAlpha(0.8),
  ],
};

const buildBg = (status: string, imageURL?: string | null): string => {
  const urlBg = `url('${imageURL}')`;
  const gradient = tints[status];
  if (gradient) {
    return `linear-gradient( ${gradient.join(",")} ), ` + urlBg;
  }
  return urlBg;
};

export const QuestLogEntryDetail: React.FC<QuestLogEntryDetailProps> = ({
  title,
  status,
  body,
  imageURL,
  rewards,
}) => {
  return (
    <Stack
      rounded="xl"
      p={4}
      bg={buildBg(status, imageURL)}
      bgSize="cover"
      bgPosition="center"
      shadow="lg"
      border="1px"
    >
      <Flex direction="row" justifyContent="space-between">
        <Heading as="h3">{title}</Heading>
        <Box alignSelf="end">
          <StatusBadge status={status} />
        </Box>
      </Flex>
      <Text>{body}</Text>
      {rewards.length && <RewardAccordion rewards={rewards} />}
    </Stack>
  );
};
