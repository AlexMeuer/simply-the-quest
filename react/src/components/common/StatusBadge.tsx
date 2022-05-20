import { Badge, BadgeProps } from "@chakra-ui/react";
import React from "react";

export interface StatusBadgeProps
  extends Omit<BadgeProps, "colorScheme" | "children"> {
  status: string;
}

const colorSchemes: Record<string, BadgeProps["colorScheme"]> = {
  success: "green",
  fail: "red",
  expired: "purple",
  active: "blue",
  disabled: "gray",
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  ...props
}) => (
  <Badge colorScheme={colorSchemes[status] || "gray"} {...props}>
    {status}
  </Badge>
);
