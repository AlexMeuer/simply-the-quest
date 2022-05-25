import { z } from "zod";
import { Reward } from "./Reward";

export const QuestLogEntry = z.object({
  title: z.string().min(1),
  body: z.string(),
  step: z.number(),
  status: z.string(), // TODO: switch to enum/literal/union/whatever
  imageURL: z.string().nullish(),
  created_at: z.union([z.date(), z.string()]).nullish(),
  updated_at: z.union([z.date(), z.string()]).nullish(),
  rewards: z.array(Reward),
});

export type QuestLogEntry = z.infer<typeof QuestLogEntry>;
