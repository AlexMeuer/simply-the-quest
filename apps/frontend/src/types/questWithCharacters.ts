import * as z from "zod";

export const Avatar = z.object({
  sm: z.string(),
  md: z.string(),
  raw: z.string(),
});
export type Avatar = z.infer<typeof Avatar>;

export const Character = z.object({
  avatar: Avatar.optional(),
  name: z.string(),
  role: z.string(),
  objective_type: z.string().optional(),
});
export type Character = z.infer<typeof Character>;

export const QuestWithCharacters = z.object({
  _id: z.string(),
  _key: z.string(),
  body: z.string(),
  title: z.string(),
  characters: z.array(Character),
  images: z
    .object({
      banner: z.string(),
    })
    .default({ banner: "https://cataas.com/cat" }),
});
export type QuestWithCharacters = z.infer<typeof QuestWithCharacters>;
