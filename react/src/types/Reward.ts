import { z } from "zod";

export const ItemRarity = z.enum([
  "trash",
  "common",
  "uncommon",
  "rare",
  "very_rare",
  "epic",
  "artifact",
]);

export const ItemRarityDetail = z.object({
  name: ItemRarity,
  color: z.string().min(1),
});

export const Reward = z.object({
  id: z.number().optional(),
  name: z.string().min(1),
  description: z.string(),
  type: z.string(),
  rarity: ItemRarity,
  count: z.number().nullish(),
  value: z.number().nullish(),
  imageURL: z.string().url().nullish(),
  sourceURL: z.string().url().nullish(),
});

export type ItemRarity = z.infer<typeof ItemRarity>;
export type ItemRarityDetail = z.infer<typeof ItemRarityDetail>;
export type Reward = z.infer<typeof Reward>;
