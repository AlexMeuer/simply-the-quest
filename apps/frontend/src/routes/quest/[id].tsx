import { useLocation, useParams } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { For, Show } from "solid-js";
import { BackendAPI } from "~/api/backend";
import { assetUrlFor } from "~/assetUrlFor";
import { Avatar } from "~/components/Avatar";
import { Markdown } from "~/components/Markdown";
import { QuestCard } from "~/components/QuestCard";
import type { QuestWithCharacters } from "~/types/questWithCharacters";

type QuestDetailLocationState = {
  quest: QuestWithCharacters;
};

type IDParams = {
  id: string;
};

export default function QuestDetail() {
  const params = useParams<IDParams>();
  const location = useLocation<QuestDetailLocationState>();
  const initialQuest = location.state?.quest;

  const query = createQuery(() => ({
    queryKey: ["Quests", params.id],
    queryFn: () => BackendAPI.questDetail(params.id),
  }));

  return (
    <div class="m-6 p-6 w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-base to-mantle border-2 border-peach -z-20">
      <div class="absolute inset-0 -z-10 opacity-40">
        <img
          src={assetUrlFor(initialQuest?.images.banner)}
          alt="Background"
          class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-base" />
      </div>
      <div class="text-text flex flex-col space-y-4">
        <div class="flex flex-row">
          <h1 class="flex-grow text-2xl font-bold text-peach">
            {query.data?.title ?? initialQuest?.title}
          </h1>
          <p class="text-overlay0 text-sm">#{params.id}</p>
        </div>
        <Markdown>{query.data?.body ?? initialQuest?.body ?? ""}</Markdown>
        <Show when={query.data === null}>
          <p class="text-red">Failed to query additional quest info!</p>
        </Show>
        <div class="flex flex-col space-y-2">
          <For each={query.data?.characters}>
            {(char) => (
              <div class="flex flex-row space-x-2 items-center">
                <Avatar
                  src={assetUrlFor(char.avatar?.sm)}
                  alt={char.name.at(0) ?? "?"}
                  tooltip={char.name}
                />
                <p
                  class={
                    char.relation.objective_type === "KILL"
                      ? "text-red"
                      : "text-text"
                  }
                >
                  {char.name} -{" "}
                  <span class="text-subtext0">{char.relation.role}</span>
                </p>
              </div>
            )}
          </For>
        </div>
        <hr class="border-rosewater" />
        <h3 class="text-lg font-bold text-peach">Notes</h3>
        <For each={query.data?.notes}>
          {(note) => (
            <div class="flex flex-col space-y-2 rounded border-rosewater border-2 p-2">
              <h4 class="text-green font-semibold">{note.title}</h4>
              <span class="pl-4">
                <Markdown>{note.body}</Markdown>
              </span>
            </div>
          )}
        </For>
        <h3 class="text-lg font-bold text-sky">Child Quests</h3>
        <ul>
          <For each={query.data?.children}>
            {(quest) => <QuestCard quest={quest} />}
          </For>
        </ul>
      </div>
    </div>
  );
}
