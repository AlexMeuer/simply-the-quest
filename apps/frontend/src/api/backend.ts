import axios from "axios";
import { QuestWithCharacters } from "~/types/questWithCharacters";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
});

export const BackendAPI = {
  questsWithCharacters: async (limit: number, offset: number) => {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    const response = await api.get<unknown>(`/quests?${params}`, {
      params: {
        limit,
        offset,
      },
    });
    const result = QuestWithCharacters.array().safeParse(response.data);
    if (result.success) {
      return result.data;
    }
    console.error(result.error);
    return [];
  },
} as const;
