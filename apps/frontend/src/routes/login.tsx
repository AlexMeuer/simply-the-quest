import { createForm, zodForm } from "@modular-forms/solid";
import { useNavigate } from "@solidjs/router";
import { useFloating } from "solid-floating-ui";
import { Show, createEffect, createSignal } from "solid-js";
import { z } from "zod";
import { createLoginMutation } from "~/hooks/createLoginMutation";

const LoginForm = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
type LoginForm = z.infer<typeof LoginForm>;

export default function Login() {
  const navigate = useNavigate();

  const [, { Form, Field }] = createForm<LoginForm>({
    validate: zodForm(LoginForm),
  });

  const mutation = createLoginMutation();

  createEffect(() => {
    if (mutation.isSuccess) {
      navigate("/");
    }
  });

  return (
    <main class="mx-auto sm:my-10 bg-mantle text-text shadow-xl sm:rounded-xl flex justify-center flex-1 overflow-hidden max-w-4xl">
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <h1 class="text-2xl lg:text-6xl text-green font-thin uppercase lg:mb-16 text-center mb-4 flex lg:flex-col lg:items-center flex-row items-baseline justify-center">
          <span>Simply</span>
          <span class="text-lg mx-2">the</span>
          <span>Quest!</span>
        </h1>
        <Show when={mutation.error}>
          <div class="text-red font-bold capitalize text-center mb-8">
            {mutation.error?.message}
          </div>
        </Show>
        <Form class="mx-auto max-w-xs" onSubmit={(v) => mutation.mutate(v)}>
          <Field name="username">
            {(field, props) => {
              const [reference, setReference] = createSignal(null);
              const [floating, setFloating] = createSignal(null);
              const position = useFloating(reference, floating, {
                placement: "right",
              });
              return (
                <>
                  <input
                    {...props}
                    ref={setReference}
                    class="w-full px-8 py-4 rounded-tl rounded-tr font-medium bg-surface0 border border-surface1 placeholder-overlay0 text-sm focus:outline-none focus:bg-surface1 focus:text-sky text-text"
                    type="text"
                    placeholder="Username"
                  />
                  <Show when={field.error}>
                    <div
                      ref={setFloating}
                      style={{
                        position: position.strategy,
                        top: `${position.y ?? 0}px`,
                        left: `${position.x ?? 0}px`,
                      }}
                      class="flex flex-row items-center"
                    >
                      <div class="absolute h-0 w-0 border-y-8 border-y-transparent border-r-[14px] border-r-red" />
                      <p class="ml-3 bg-red text-base p-1 rounded-lg shadow-lg">
                        {field.error}
                      </p>
                    </div>
                  </Show>
                </>
              );
            }}
          </Field>
          <Field name="password">
            {(field, props) => {
              const [reference, setReference] = createSignal(null);
              const [floating, setFloating] = createSignal(null);
              const position = useFloating(reference, floating, {
                placement: "right",
              });
              return (
                <>
                  <input
                    {...props}
                    ref={setReference}
                    class="w-full px-8 py-4 rounded-bl rounded-br font-medium bg-surface0 border border-surface1 border-t-0 placeholder-overlay0 text-sm focus:outline-none focus:bg-surface1 focus:text-sky text-text"
                    type="password"
                    placeholder="Password"
                  />
                  <Show when={field.error}>
                    <div
                      ref={setFloating}
                      style={{
                        position: position.strategy,
                        top: `${position.y ?? 0}px`,
                        left: `${position.x ?? 0}px`,
                      }}
                      class="flex flex-row items-center"
                    >
                      <div class="absolute h-0 w-0 border-y-8 border-y-transparent border-r-[14px] border-r-red" />
                      <p class="ml-3 bg-red text-base p-1 rounded-lg shadow-lg">
                        {field.error}
                      </p>
                    </div>
                  </Show>
                </>
              );
            }}
          </Field>
          <button
            class="h-10 mt-5 tracking-wide font-semibold bg-lavender text-mantle w-full py-4 rounded-lg hover:bg-blue transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline disabled:bg-surface0 disabled:animate-pulse"
            type="submit"
            disabled={mutation.isPending}
          >
            <Show when={mutation.isPending} fallback={<>Log in</>}>
              <svg
                class="animate-spin text-surface1"
                width="30"
                height="30"
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
                  <title>Logging in...</title>
                </circle>
              </svg>
            </Show>
          </button>
        </Form>
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
