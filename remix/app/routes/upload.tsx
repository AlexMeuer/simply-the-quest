import { presignUpload } from "~/services/minio.server";
import type { Route } from "./+types/upload";

export async function action(args: Route.ActionArgs) {
  if (args.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // TODO: Only allow logged in users to upload files.

  const url = await presignUpload("stq-docs", "test-object");

  return new Response(JSON.stringify({ url }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
