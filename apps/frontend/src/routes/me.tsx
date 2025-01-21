import { Match, Show, Switch } from "solid-js";
import { useCurrentUserContext } from "~/contexts/CurrentUserContext";
import { useLogout } from "~/hooks/useLogout";

const oauthUrlFor = (provider: string) =>
  `${import.meta.env.VITE_API_BASEURL_CLIENT}/oauth/${provider}/login`;

export default function Login() {
  const cuc = useCurrentUserContext();
  const logout = useLogout();
  return (
    <main class="mx-auto sm:my-10 bg-mantle text-text shadow-xl sm:rounded-xl flex justify-center flex-1 overflow-hidden max-w-4xl">
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <h1 class="text-2xl lg:text-6xl text-green font-thin uppercase lg:mb-16 text-center mb-4 flex lg:flex-col lg:items-center flex-row items-baseline justify-center">
          <span>Simply</span>
          <span class="text-lg mx-2">the</span>
          <span>Quest!</span>
        </h1>
        <Show when={logout.error}>
          <div class="text-red font-bold capitalize text-center mb-8">
            {logout.error?.message}
          </div>
        </Show>
        <div class="flex flex-col items-center text-text">
          <Switch>
            <Match when={cuc.isLoading}>Loading...</Match>
            <Match when={cuc.error}>Error</Match>
            <Match when={!cuc.user}>
              <a
                href={oauthUrlFor("discord")}
                class="bg-[#5865F2] text-white rounded-lg flex items-center justify-center h-16 w-full p-4 my-8"
              >
                <DiscordLogoWhite />
                Login with Discord
              </a>
            </Match>
            <Match when={cuc.user}>
              <img
                src={cuc.user?.avatar_url ?? ""}
                alt={cuc.user?.username.at(0)?.toUpperCase() ?? ""}
                class="w-24 h-24 rounded-full shadow-crust shadow-lg border-2 border-crust"
              />
              <h2 class="text-peach text-4xl">{cuc.user?.username}</h2>
              <p>{cuc.user?.role}</p>
              <button
                type="button"
                class="mt-4 bg-base text-overlay2 rounded p-2 hover:text-lavender transition-colors"
                onClick={() => logout.mutate()}
                disabled={logout.isPending}
              >
                <Show when={logout.isPending} fallback={<>Logout</>}>
                  <svg
                    class="animate-spin text-lavender"
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
                      <title>Logging out...</title>
                    </circle>
                  </svg>
                </Show>
              </button>
            </Match>
          </Switch>
        </div>
        {/* <Form class="mx-auto max-w-xs" onSubmit={(v) => mutation.mutate(v)}> */}
        {/*   <Field name="username"> */}
        {/*     {(field, props) => { */}
        {/*       const [reference, setReference] = createSignal(null); */}
        {/*       const [floating, setFloating] = createSignal(null); */}
        {/*       const position = useFloating(reference, floating, { */}
        {/*         placement: "right", */}
        {/*       }); */}
        {/*       return ( */}
        {/*         <> */}
        {/*           <input */}
        {/*             {...props} */}
        {/*             ref={setReference} */}
        {/*             class="w-full px-8 py-4 rounded-tl rounded-tr font-medium bg-surface0 border border-surface1 placeholder-overlay0 text-sm focus:outline-none focus:bg-surface1 focus:text-sky text-text" */}
        {/*             type="text" */}
        {/*             placeholder="Username" */}
        {/*           /> */}
        {/*           <Show when={field.error}> */}
        {/*             <div */}
        {/*               ref={setFloating} */}
        {/*               style={{ */}
        {/*                 position: position.strategy, */}
        {/*                 top: `${position.y ?? 0}px`, */}
        {/*                 left: `${position.x ?? 0}px`, */}
        {/*               }} */}
        {/*               class="flex flex-row items-center" */}
        {/*             > */}
        {/*               <div class="absolute h-0 w-0 border-y-8 border-y-transparent border-r-[14px] border-r-red" /> */}
        {/*               <p class="ml-3 bg-red text-base p-1 rounded-lg shadow-lg"> */}
        {/*                 {field.error} */}
        {/*               </p> */}
        {/*             </div> */}
        {/*           </Show> */}
        {/*         </> */}
        {/*       ); */}
        {/*     }} */}
        {/*   </Field> */}
        {/*   <Field name="password"> */}
        {/*     {(field, props) => { */}
        {/*       const [reference, setReference] = createSignal(null); */}
        {/*       const [floating, setFloating] = createSignal(null); */}
        {/*       const position = useFloating(reference, floating, { */}
        {/*         placement: "right", */}
        {/*       }); */}
        {/*       return ( */}
        {/*         <> */}
        {/*           <input */}
        {/*             {...props} */}
        {/*             ref={setReference} */}
        {/*             class="w-full px-8 py-4 rounded-bl rounded-br font-medium bg-surface0 border border-surface1 border-t-0 placeholder-overlay0 text-sm focus:outline-none focus:bg-surface1 focus:text-sky text-text" */}
        {/*             type="password" */}
        {/*             placeholder="Password" */}
        {/*           /> */}
        {/*           <Show when={field.error}> */}
        {/*             <div */}
        {/*               ref={setFloating} */}
        {/*               style={{ */}
        {/*                 position: position.strategy, */}
        {/*                 top: `${position.y ?? 0}px`, */}
        {/*                 left: `${position.x ?? 0}px`, */}
        {/*               }} */}
        {/*               class="flex flex-row items-center" */}
        {/*             > */}
        {/*               <div class="absolute h-0 w-0 border-y-8 border-y-transparent border-r-[14px] border-r-red" /> */}
        {/*               <p class="ml-3 bg-red text-base p-1 rounded-lg shadow-lg"> */}
        {/*                 {field.error} */}
        {/*               </p> */}
        {/*             </div> */}
        {/*           </Show> */}
        {/*         </> */}
        {/*       ); */}
        {/*     }} */}
        {/*   </Field> */}
        {/*   <button */}
        {/*     class="h-10 mt-5 tracking-wide font-semibold bg-lavender text-mantle w-full py-4 rounded-lg hover:bg-blue transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline disabled:bg-surface0 disabled:animate-pulse" */}
        {/*     type="submit" */}
        {/*     disabled={mutation.isPending} */}
        {/*   > */}
        {/*     <Show when={mutation.isPending} fallback={<>Log in</>}> */}
        {/*       <svg */}
        {/*         class="animate-spin text-surface1" */}
        {/*         width="30" */}
        {/*         height="30" */}
        {/*         viewBox="0 0 80 80" */}
        {/*         xmlns="http://www.w3.org/2000/svg" */}
        {/*       > */}
        {/*         <circle */}
        {/*           class="spin" */}
        {/*           cx="40" */}
        {/*           cy="40" */}
        {/*           fill="none" */}
        {/*           r="20" */}
        {/*           stroke-width="5" */}
        {/*           stroke="currentColor" */}
        {/*           stroke-dasharray="80 140" */}
        {/*           stroke-linecap="round" */}
        {/*         > */}
        {/*           <title>Logging in...</title> */}
        {/*         </circle> */}
        {/*       </svg> */}
        {/*     </Show> */}
        {/*   </button> */}
        {/* </Form> */}
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

const DiscordLogoWhite = () => (
  <svg
    class="w-8 m-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    role="img"
    aria-label="Discord"
  >
    <path
      fill="#fff"
      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
    />
  </svg>
);
