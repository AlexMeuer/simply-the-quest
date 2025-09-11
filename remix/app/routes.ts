import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("upload", "routes/upload.ts"),
  route("finalize", "routes/finalize.ts"),
] satisfies RouteConfig;
