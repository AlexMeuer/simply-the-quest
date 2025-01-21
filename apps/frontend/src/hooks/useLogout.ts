import { createMutation, useQueryClient } from "@tanstack/solid-query";
import { BackendAPI } from "~/api/backend";
import { CURRENT_USER_CACHE_KEY } from "./useCurrentUser";

export const useLogout = () => {
  const client = useQueryClient();
  return createMutation(() => ({
    mutationFn: BackendAPI.logout,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [CURRENT_USER_CACHE_KEY] });
    },
  }));
};
