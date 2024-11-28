import { z } from "zod";
import { Avatar, QuestBase } from "./common";

export const CharacterRelation = z.object({
  role: z.string(),
  objective_type: z.string().optional(),
});
export type CharacterRelation = z.infer<typeof CharacterRelation>;

export const Character = z.object({
  _id: z.string(),
  aliases: z.string().optional(),
  avatar: Avatar,
  bio: z.string(),
  name: z.string(),
  race: z.string(),
  relation: CharacterRelation,
  class: z.string().optional(),
});
export type Character = z.infer<typeof Character>;

export const Note = z.object({
  _id: z.string(),
  body: z.string(),
  relation: z.record(z.any()),
  title: z.string(),
});
export type Note = z.infer<typeof Note>;

export const QuestDetail = QuestBase.extend({
  _key: z.string(),
  characters: z.array(Character),
  notes: z.array(Note),
  children: z.array(QuestBase),
});
export type QuestDetail = z.infer<typeof QuestDetail>;
