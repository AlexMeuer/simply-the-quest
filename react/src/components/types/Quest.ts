import { QuestListQuery } from "../../generated/graphql";

export type Quest = Omit<QuestListQuery["quests"][0], "tags"> & {
  tags: string[];
};

export const flattenQueriedQuest = (q: QuestListQuery["quests"][0]): Quest => ({
  ...q,
  tags: q.tags.map((t) => t.tag_name),
});

export const flattenQueriedQuests = (
  quests: QuestListQuery["quests"]
): Quest[] => quests.map(flattenQueriedQuest);
