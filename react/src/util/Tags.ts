import { z } from "zod";

export const WithNestedTags = z.object({
  tags: z.array(
    z.object({
      tag_name: z.string().min(1),
    })
  ),
});

export const WithFlatTags = z.object({
  tags: z.array(z.string().min(1)),
});

export type WithNestedTags = z.infer<typeof WithNestedTags>;
export type WithFlatTags = z.infer<typeof WithFlatTags>;

export const flattenNestedTags = <T extends WithNestedTags>(
  input: T
): Omit<T, "tags"> & WithFlatTags => ({
  ...input,
  tags: input.tags.map((tag) => tag.tag_name),
});

export const flattenNestedTagsForEach = <T extends WithNestedTags>(
  input: T[]
): (Omit<T, "tags"> & WithFlatTags)[] => input.map(flattenNestedTags);
