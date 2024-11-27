import type { FlowComponent, VoidComponent } from "solid-js";

export type AvatarProps = {
  src: string;
  alt: string;
  tooltip: string;
};

export const Avatar: VoidComponent<AvatarProps> = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      class="w-10 h-10 rounded-full border-2 border-base"
    />
  );
};

export const AvatarStrip: FlowComponent = (props) => (
  <div class="flex -space-x-2">{props.children}</div>
);
