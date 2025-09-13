import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("debug/docs", "routes/debug/docs.tsx"),
] satisfies RouteConfig;
