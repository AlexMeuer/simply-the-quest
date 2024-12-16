import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { ErrorBoundary, For, Show, Suspense, createEffect } from "solid-js";
import { QuestCard } from "~/components/QuestCard";
import { createQuestListQuery } from "~/hooks/createQuestListQuery";

export default function Home() {
  const query = createQuestListQuery();
  let el: HTMLSpanElement | undefined;
  const endOfListIsVisible = createVisibilityObserver()(() => el);
  createEffect(() => {
    if (!query.isFetching && query.hasNextPage && endOfListIsVisible()) {
      query.fetchNextPage();
    }
  });
  return (
    <main class="text-center mx-auto text-text md:p-4 max-w-screen-lg">
      <h1 class="max-6-xs text-xl md:text-6xl text-green font-thin uppercase my-4 md:my-16">
        Quests
      </h1>
      <ErrorBoundary
        fallback={<div class="text-red">Something went wrong!</div>}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ul class="md:space-y-6 mx-auto max-w-2xl">
            <For each={query.data?.pages.flat()}>
              {(item) => <QuestCard quest={item} />}
            </For>
            <Show when={query.isFetching}>
              <li class="w-full md:rounded-lg bg-mantle border-2 border-mantle hover:rotate-1 hover:border-surface2 transition-all animate-pulse h-32 flex items-center justify-center cursor-progress">
                <svg
                  class="animate-spin text-surface2"
                  width="40"
                  height="40"
                  viewBox="0 0 80 80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    class="spin"
                    cx="40"
                    cy="40"
                    fill="none"
                    r="20"
                    stroke-width="5"
                    stroke="currentColor"
                    stroke-dasharray="80 140"
                    stroke-linecap="round"
                  >
                    <title>Loading...</title>
                  </circle>
                </svg>
              </li>
            </Show>
            <Show when={!query.hasNextPage}>
              <li class="text-text mt-6 pb-32">That's all folks.</li>
            </Show>
          </ul>
          {/* 
            The ref is used to determine when the end of the list is visible
            so we can fetch more data.
          */}
          <span ref={el} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
