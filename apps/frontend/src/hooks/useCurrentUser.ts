import { createQuery, isServer } from "@tanstack/solid-query";
import { createEffect, createMemo } from "solid-js";
import toast from "solid-toast";
import { BackendAPI } from "~/api/backend";
import type { User } from "~/types/user";

export type CurrentUserResult = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
};

const STALE_TIME = 1000 * 60 * 5;

export const CURRENT_USER_CACHE_KEY = "currentUser";

export function useCurrentUser(): CurrentUserResult {
  const q = createQuery<User | null>(() => ({
    queryKey: [CURRENT_USER_CACHE_KEY],
    queryFn: BackendAPI.me,
    staleTime: () => (isServer ? 0 : STALE_TIME),
    refetchOnWindowFocus: true,
    refetchOnMount: "always",
    refetchOnReconnect: "always",
  }));

  const result = createMemo(() => ({
    user: q.data ?? null,
    isLoading: q.isLoading,
    error: q.error,
  }));

  createEffect(() => {
    if (q.error) {
      toast.error("Failed to load user data");
    }
  });

  return result();
}
