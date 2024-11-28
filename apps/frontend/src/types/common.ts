import { z } from "zod";

export const Avatar = z.object({
  sm: z.string(),
  md: z.string(),
  raw: z.string(),
});
export type Avatar = z.infer<typeof Avatar>;

export const QuestDetailImages = z.object({
  banner: z.string(),
});
export type QuestDetailImages = z.infer<typeof QuestDetailImages>;

export const QuestBase = z.object({
  _id: z.string(),
  _key: z.string(),
  body: z.string(),
  images: QuestDetailImages,
  title: z.string(),
});
