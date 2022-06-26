import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

export interface AddRewardButtonProps {
  onClick: () => void;
}

export const AddRewardButton: React.FC<AddRewardButtonProps> = ({
  onClick,
}) => (
  <Button
    mx={2}
    size="xs"
    aria-label="add reward"
    variant="ghost"
    onClick={onClick}
  >
    <AddIcon mr={1} />
    Add Reward
  </Button>
);
