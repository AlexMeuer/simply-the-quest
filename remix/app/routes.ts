import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("debug/docs", "routes/debug/list.tsx", [
		index("routes/debug/new.tsx"),
		route(":docId", "routes/debug/edit.tsx"),
	]),
] satisfies RouteConfig;
