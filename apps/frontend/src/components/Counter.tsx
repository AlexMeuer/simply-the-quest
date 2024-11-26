import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="w-[200px] rounded-full bg-surface0 border-2 border-overlay0 focus:border-overlay2 active:border-overlay2 px-[2rem] py-[1rem] text-teal"
      onClick={() => setCount(count() + 1)}
      type="button"
    >
      Clicks: {count()}
    </button>
  );
}
