import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Suspense } from "solid-js";
import { Toaster } from "solid-toast";
import { Nav } from "~/components/Nav";
import { CurrentUserProvider } from "~/contexts/CurrentUserContext";
import "./app.css";

const client = new QueryClient();

export default function App() {
  return (
    <MetaProvider>
      <QueryClientProvider client={client}>
        <CurrentUserProvider>
          <Router
            root={(props) => (
              <>
                <Nav />
                <Suspense>{props.children}</Suspense>
              </>
            )}
          >
            <FileRoutes />
          </Router>
          <Toaster
            toastOptions={{
              duration: 5000,
            }}
            containerClassName="text-peach"
          />
        </CurrentUserProvider>
      </QueryClientProvider>
    </MetaProvider>
  );
}
