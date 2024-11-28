import * as z from "zod";
import { Avatar, QuestBase, QuestDetailImages } from "./common";

export const Character = z.object({
  avatar: Avatar.optional(),
  name: z.string(),
  role: z.string(),
  objective_type: z.string().optional(),
});
export type Character = z.infer<typeof Character>;

export const QuestWithCharacters = QuestBase.extend({
  characters: z.array(Character),
  images: QuestDetailImages,
});
export type QuestWithCharacters = z.infer<typeof QuestWithCharacters>;
