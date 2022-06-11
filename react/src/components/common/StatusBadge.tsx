import { Badge, BadgeProps } from "@chakra-ui/react";
import { keyframes, Keyframes } from "@emotion/react";
import { capitalCase } from "change-case";
import { motion } from "framer-motion";
import React from "react";
import { QuestLogEntry } from "../../types/QuestLogEntry";
import { Status } from "../../types/Status";

export interface StatusBadgeProps
  extends Omit<BadgeProps, "colorScheme" | "children"> {
  status: Status;
  /**
   * If status is 'auto', then `logEntries` is used to
   * discern the status to show.
   */
  logEntries?: Pick<QuestLogEntry, "status">[];
  animate?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  logEntries,
  animate,
  ...props
}) => {
  if (status === "auto") {
    return logEntries && logEntries.length ? (
      <StatusBadge status={logEntries[0].status} animate={animate} {...props} />
    ) : null;
  }
  return (
    <Badge
      as={animate ? motion.div : undefined}
      animation={animate ? buildAnimation(status) : undefined}
      colorScheme={BadgeColors[status]}
      {...props}
    >
      {capitalCase(status)}
    </Badge>
  );
};

const BadgeColors: Record<Status, BadgeProps["colorScheme"]> = {
  active: "cyan",
  success: "green",
  fail: "red",
  expired: "purple",
  disabled: "gray",
  auto: "gray",
};

const KeyframeVariants: Record<Status, Keyframes | null> = {
  active: keyframes`
  0% { transform: scale(1) }
  20% { transform: scale(1.2) }
  40% { transform: scale(1.2) }
  60% { transform: scale(1.3) }
  80% { transform: scale(1) }
  100% { transform: scale(1) }
`,
  success: null,
  fail: null,
  expired: null,
  disabled: null,
  auto: null,
};

const buildAnimation = (status: Status): string | undefined => {
  const kf = KeyframeVariants[status];
  return kf ? `${kf} 3s ease-in-out 2s` : undefined;
};
