import { createQuery } from "@tanstack/solid-query";
import { ErrorBoundary, For, Suspense } from "solid-js";

export default function Home() {
  const repositoryQuery = createQuery(() => ({
    queryKey: ["Quests"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/foo");
      if (!result.ok) throw new Error("Failed to fetch data");
      return result.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    throwOnError: true,
  }));
  return (
    <main class="text-center mx-auto text-text p-4">
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
          <ul>
            <For each={repositoryQuery.data}>
              {(item) => (
                <li>
                  <span class="text-overlay1">({item._key})</span>{" "}
                  <span class="text-yellow">{item.title}</span> - {item.body}
                </li>
              )}
            </For>
          </ul>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
