import { createMutation } from "@tanstack/solid-query";
import { BackendAPI } from "~/api/backend";
import { setUserStore } from "~/stores/user";

export type LoginParams = {
  username: string;
  password: string;
};

export const createLoginMutation = () => {
  return createMutation(() => ({
    mutationFn: (p: LoginParams) => BackendAPI.login(p.username, p.password),
    onSuccess(data, variables, context) {
      setUserStore((s) => ({ ...s, current: data }));
    },
  }));
};
