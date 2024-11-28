import { ErrorBoundary, For, Suspense } from "solid-js";
import { QuestCard } from "~/components/QuestCard";
import { createQuestListQuery } from "~/hooks/createQuestListQuery";

export default function Home() {
  const query = createQuestListQuery();
  return (
    <main class="text-center mx-auto text-text p-4 max-w-screen-lg">
      <h1 class="max-6-xs text-6xl text-green font-thin uppercase my-16">
        Quests
      </h1>

      {/* An error while fetching will be caught by the ErrorBoundary */}
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        {/* Suspense will trigger a loading state while the data is being fetched */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* 
            The `data` property on a query is a SolidJS resource  
            so it will work with Suspense and transitions out of the box! 
          */}
          <ul class="space-y-6">
            <For each={query.data?.pages.flat()}>
              {(item) => <QuestCard quest={item} />}
            </For>
          </ul>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
