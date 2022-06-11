import { z } from "zod";
import { WithFlatTags } from "../util/Tags";
import { QuestLogEntry } from "./QuestLogEntry";
import { Reward } from "./Reward";
import { Status } from "./Status";
import { StringDate } from "./StringDate";

export const QuestBase = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  status: Status,
  giver: z.string(),
  imageURL: z.string().url().nullish(),
  created_at: StringDate,
  updated_at: StringDate,
  log_entries: z
    .array(QuestLogEntry.pick({ status: true }))
    .optional()
    .default([]),
});

export const QuestDetail = QuestBase.extend({
  rewards: z.array(Reward),
  log_entries: z.array(QuestLogEntry),
}).merge(WithFlatTags);

export type QuestBase = z.infer<typeof QuestBase>;
export type QuestDetail = z.infer<typeof QuestDetail>;
