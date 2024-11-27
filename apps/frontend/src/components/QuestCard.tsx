import { For, type VoidComponent } from "solid-js";
import type { QuestWithCharacters } from "~/types/questWithCharacters";
import { Avatar, AvatarStrip } from "./Avatar";
import { Markdown } from "./Markdown";

export type QuestCardProps = {
  quest: QuestWithCharacters;
};

export const QuestCard: VoidComponent<QuestCardProps> = (props) => (
  <li class="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-crust to-mantle border-2 border-mantle hover:rotate-1 hover:border-peach transition-all">
    <div class="absolute inset-0">
      <img
        src={assetUrlFor(props.quest.images.banner)}
        alt="Background"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-crust via-transparent to-mantle opacity-90" />
    </div>

    <div class="relative p-6 space-y-4 text-left">
      <div class="flex flex-row">
        <h2 class="text-rosewater text-2xl font-bold flex-grow">
          {props.quest.title}
        </h2>
        <span class="text-text text-sm opacity-70 ">#{props.quest._key}</span>
      </div>
      <p class="text-subtext0 text-sm leading-relaxed">
        <Markdown>{props.quest.body}</Markdown>
      </p>

      <AvatarStrip>
        <For each={props.quest.characters}>
          {(char) => (
            <Avatar
              src={assetUrlFor(char.avatar?.sm)}
              alt={char.name.at(0) ?? "?"}
              tooltip={char.name}
            />
          )}
        </For>
      </AvatarStrip>
    </div>
  </li>
);

const assetUrlFor = (path: string | undefined | null) => {
  if (path) {
    // Lazy url check
    if (path.startsWith("/")) {
      return `${import.meta.env.VITE_ASSETS_BASEURL}${path}`;
    }
    return path;
  }
  return "";
};
