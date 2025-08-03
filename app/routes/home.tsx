import { db } from "~/db/db.server";
import { campaign } from "~/db/schema/campaign";
import { Welcome } from "../welcome/welcome";

export async function loader() {
  const campaigns = await db.$count(campaign);
  console.log("Campaigns count:", campaigns);
}

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
