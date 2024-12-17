import { createStore } from "solid-js/store";
import type { User } from "~/types/user";

export const [userStore, setUserStore] = createStore({
  current: null as User | null,
});
