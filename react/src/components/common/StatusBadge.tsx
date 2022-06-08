import { Badge, BadgeProps } from "@chakra-ui/react";
import { capitalCase } from "change-case";
import React from "react";
import { QuestLogEntry } from "../../types/QuestLogEntry";
import { Status } from "../../types/Status";

const BadgeColors: Record<Status, BadgeProps["colorScheme"]> = {
  active: "cyan",
  success: "green",
  fail: "red",
  expired: "purple",
  disabled: "gray",
  auto: "gray",
};

export interface StatusBadgeProps
  extends Omit<BadgeProps, "colorScheme" | "children"> {
  status: Status;
  /**
   * If status is 'auto', then `logEntries` is used to
   * discern the status to show.
   */
  logEntries?: Pick<QuestLogEntry, "status">[];
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  logEntries,
  ...props
}) => {
  if (status === "auto") {
    return logEntries && logEntries.length ? (
      <StatusBadge status={logEntries[0].status} {...props} />
    ) : null;
  }
  return (
    <Badge colorScheme={BadgeColors[status]} {...props}>
      {capitalCase(status)}
    </Badge>
  );
};
