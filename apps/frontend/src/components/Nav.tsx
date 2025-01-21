import { A, useLocation } from "@solidjs/router";
import { Match, Switch } from "solid-js";
import { useCurrentUserContext } from "~/contexts/CurrentUserContext";

export function Nav() {
  const location = useLocation();
  const cuc = useCurrentUserContext();
  const active = (path: string) =>
    path === location.pathname
      ? "border-peach"
      : "border-transparent hover:border-peach";
  return (
    <nav class="bg-mantle flex flex-row justify-between items-center p-3">
      <ul class="container flex items-center text-text">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6 transition-all`}>
          <A href="/">Quests</A>
        </li>
        <li
          class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6 transition-all`}
        >
          <A href="/about">About</A>
        </li>
      </ul>
      <A
        href="/me"
        class="text-text mx-1.5 sm:mx-6 min-w-fit hover:text-peach transition-all"
      >
        <Switch>
          <Match when={cuc.isLoading}>Loading...</Match>
          <Match when={cuc.error}>Error</Match>
          <Match when={!cuc.user}>Login</Match>
          <Match when={cuc.user}>
            <div class="flex flex-row items-center justify-end space-x-1">
              <img
                src={cuc.user?.avatar_url ?? ""}
                alt={cuc.user?.username.at(0)?.toUpperCase() ?? ""}
                class="w-6 h-6 rounded-full border-2 border-crust"
              />
              <div class="text-text">{cuc.user?.username}</div>
            </div>
          </Match>
        </Switch>
      </A>
    </nav>
  );
}
