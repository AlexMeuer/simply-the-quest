import { ErrorBoundary, Suspense } from "solid-js";

export default function Home() {
  return (
    <main class="mx-auto sm:my-10 bg-mantle text-text shadow-xl sm:rounded-xl flex justify-center flex-1 overflow-hidden max-w-4xl">
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <h1 class="text-2xl lg:text-6xl text-green font-thin uppercase lg:mb-16 text-center mb-4 flex lg:flex-col lg:items-center flex-row items-baseline justify-center">
          <span>Simply</span>
          <span class="text-lg mx-2">the</span>
          <span>Quest!</span>
        </h1>
        <div class="mx-auto max-w-xs">
          <input
            class="w-full px-8 py-4 rounded-tl rounded-tr font-medium bg-surface0 border border-surface1 placeholder-overlay0 text-sm focus:outline-none focus:bg-surface1 focus:text-sky text-text"
            type="text"
            placeholder="Username"
          />
          <input
            class="w-full px-8 py-4 rounded-bl rounded-br font-medium bg-surface0 border border-surface1 border-t-0 placeholder-overlay0 text-sm focus:outline-none focus:bg-surface1 focus:text-sky text-text"
            type="password"
            placeholder="Password"
          />
          <button
            class="mt-5 tracking-wide font-semibold bg-lavender text-mantle w-full py-4 rounded-lg hover:bg-blue transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </div>
      </div>
      <div class="flex-1 hidden lg:flex">
        <div
          class="w-full bg-cover bg-center bg-no-repeat"
          style="background-image: url('/images/login-art.webp');"
        />
      </div>
    </main>
  );
}
