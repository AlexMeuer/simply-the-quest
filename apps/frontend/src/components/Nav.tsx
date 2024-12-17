import { A, useLocation } from "@solidjs/router";
import { Show } from "solid-js";
import { userStore } from "~/stores/user";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname
      ? "border-peach"
      : "border-transparent hover:border-peach";
  return (
    <nav class="bg-mantle flex flex-row justify-between items-baseline p-3">
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
      <Show
        when={userStore.current}
        fallback={
          <A href="/login" class="text-text hover:text-peach transition-colors">
            Login
          </A>
        }
      >
        <div class="text-text">{userStore.current?.username}</div>
      </Show>
    </nav>
  );
}
