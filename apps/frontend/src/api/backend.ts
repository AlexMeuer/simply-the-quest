import { getRequestEvent, isServer } from "solid-js/web";
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
    const response = await fetch(`${getApiUrl()}/quests?${params}`, makeInit());
    const result = QuestWithCharacters.array().safeParse(await response.json());
    if (result.success) {
      return result.data;
    }
    console.error("Failed to parse quest list", result.error);
    return [];
  },
  questDetail: async (id: string) => {
    const response = await fetch(`${getApiUrl()}/quests/${id}`, makeInit());
    const result = QuestDetail.safeParse(await response.json());
    if (result.success) {
      return result.data;
    }
    console.error(result.error);
    return null;
  },
  me: async (): Promise<User | null> => {
    const response = await fetch(`${getApiUrl()}/user/me`, makeInit());
    if (response.ok) {
      return User.parse(await response.json());
    }
    console.log("Failed to fetch user", { body: await response.text() });
    return null;
  },
  login: async (username: string, password: string): Promise<User> => {
    const response = await fetch(
      `${getApiUrl()}/user/login`,
      makeInit({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }),
    );
    if (response.ok) {
      return User.parse(await response.json());
    }
    throw new Error(ErrorResponse.parse(await response.json()).message);
  },
  logout: async (): Promise<void> => {
    const response = await fetch(
      `${getApiUrl()}/user/session`,
      makeInit({ method: "DELETE" }),
    );
    if (!response.ok) {
      throw new Error(ErrorResponse.parse(await response.json()).message);
    }
  },
} as const;

const makeInit = (init?: RequestInit): RequestInit => ({
  credentials: "include",
  ...init,
  headers: {
    cookie: getRequestEvent()?.request.headers.get("cookie") ?? "",
    ...init?.headers,
  },
});
