import { presignUpload } from "~/services/minio.server";
import type { Route } from "./+types/upload";
import { ulid } from "~/services/ulid.server";

export async function action(args: Route.ActionArgs) {
  if (args.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // TODO: Only allow logged in users to upload files.

  const docId = ulid();
  const key = `documents/${docId}`;
  const url = await presignUpload("stq-docs", key);
  return new Response(JSON.stringify({ url, key, docId }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
