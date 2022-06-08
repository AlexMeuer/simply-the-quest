import { z } from "zod";
import { Reward } from "./Reward";
import { Status } from "./Status";
import { StringDate } from "./StringDate";

export const QuestLogEntry = z.object({
  title: z.string().min(1),
  body: z.string(),
  step: z.number(),
  status: Status,
  imageURL: z.string().url().nullish(),
  created_at: StringDate.nullish(),
  updated_at: StringDate.nullish(),
  rewards: z.array(Reward),
});

export type QuestLogEntry = z.infer<typeof QuestLogEntry>;
