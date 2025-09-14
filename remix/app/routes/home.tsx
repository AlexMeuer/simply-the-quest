import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Simply the Quest!" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return <Welcome />;
}
