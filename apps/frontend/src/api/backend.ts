import { isServer } from "solid-js/web";
import { z } from "zod";
import { QuestDetail } from "~/types/questDetail";
import { QuestWithCharacters } from "~/types/questWithCharacters";
import { User } from "~/types/user";

const getApiUrl = () =>
  isServer
    ? import.meta.env.VITE_API_BASEURL_SERVER
    : import.meta.env.VITE_API_BASEURL_CLIENT;

const ErrorResponse = z.object({
  message: z.string(),
});

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
  login: async (username: string, password: string): Promise<User> => {
    const response = await fetch(`${getApiUrl()}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      return User.parse(await response.json());
    }
    throw new Error(ErrorResponse.parse(await response.json()).message);
  },
} as const;
