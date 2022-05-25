import { z } from "zod";

export const Reward = z.object({
  name: z.string().min(1),
  description: z.string(),
  type: z.string(),
  rarity: z.string(), // TODO: switch to enum/literal/union/whatever
  count: z.number().nullish(),
  value: z.number().nullish(),
  imageURL: z.string().nullish(),
  sourceURL: z.string().nullish(),
});

export type Reward = z.infer<typeof Reward>;
