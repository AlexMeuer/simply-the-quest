import { isServer } from "solid-js/web";
import { QuestDetail } from "~/types/questDetail";
import { QuestWithCharacters } from "~/types/questWithCharacters";

const getApiUrl = () =>
  isServer
    ? import.meta.env.VITE_API_BASEURL_SERVER
    : import.meta.env.VITE_API_BASEURL_CLIENT;

export const BackendAPI = {
  questsWithCharacters: async (limit: number, offset: number) => {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    const response = await fetch(`${getApiUrl()}/quests?${params}`);
    const result = QuestWithCharacters.array().safeParse(await response.json());
    if (result.success) {
      return result.data;
    }
    console.error("Failed to parse quest list", result.error);
    return [];
  },
  questDetail: async (id: string) => {
    const response = await fetch(`${getApiUrl()}/quests/${id}`);
    const result = QuestDetail.safeParse(await response.json());
    if (result.success) {
      return result.data;
    }
    console.error(result.error);
    return null;
  },
} as const;
