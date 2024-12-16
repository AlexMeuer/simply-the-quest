import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";

const client = new QueryClient();

export default function App() {
  return (
    <MetaProvider>
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </MetaProvider>
  );
}
