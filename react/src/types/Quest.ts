import { z } from "zod";
import { WithFlatTags } from "../util/Tags";
import { QuestLogEntry } from "./QuestLogEntry";
import { Reward } from "./Reward";

export const QuestBase = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  giver: z.string(),
  imageURL: z.string().nullish(),
  created_at: z.union([z.date(), z.string()]),
  updated_at: z.union([z.date(), z.string()]),
});

export const QuestDetail = QuestBase.extend({
  rewards: z.array(Reward),
  log_entries: z.array(QuestLogEntry),
}).merge(WithFlatTags);

export type QuestBase = z.infer<typeof QuestBase>;
export type QuestDetail = z.infer<typeof QuestDetail>;
