import { Tag } from "@chakra-ui/tag";
import { capitalCase } from "change-case";
import React from "react";
import { useItemRarityColor } from "../../hooks/useItemRarities";
import { ItemRarity } from "../../types/Reward";

export interface ItemRarityTagProps {
  rarity: ItemRarity;
}

export const ItemRarityTag: React.FC<ItemRarityTagProps> = ({ rarity }) => {
  const { data } = useItemRarityColor(rarity);
  return <Tag colorScheme={data}>{capitalCase(rarity)}</Tag>;
};
