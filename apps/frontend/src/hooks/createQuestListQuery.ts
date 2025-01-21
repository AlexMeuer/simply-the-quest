import {
  type DefaultError,
  type InfiniteData,
  type QueryKey,
  createInfiniteQuery,
} from "@tanstack/solid-query";
import { getRequestEvent } from "solid-js/web";
import { BackendAPI } from "~/api/backend";
import type { QuestWithCharacters } from "~/types/questWithCharacters";

type LimitOffsetPageParam = {
  limit: number;
  offset: number;
};

export const createQuestListQuery = () => {
  const cookie = getRequestEvent()?.request.headers.get("cookie") ?? undefined;
  return createInfiniteQuery<
    QuestWithCharacters[],
    DefaultError,
    InfiniteData<QuestWithCharacters[]>,
    QueryKey,
    LimitOffsetPageParam
  >(() => ({
    queryKey: ["Quests"],
    queryFn: (ctx) =>
      BackendAPI.questsWithCharacters(
        ctx.pageParam.limit,
        ctx.pageParam.offset,
        cookie,
      ),
    initialPageParam: { limit: 10, offset: 0 },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < lastPageParam.limit) {
        return undefined;
      }
      return {
        limit: lastPageParam.limit,
        offset: lastPageParam.offset + lastPageParam.limit,
      };
    },
  }));
};
