import z from "zod";
import type { Route } from "./+types/finalize";

const schema = z.object({
  docId: z.ulid(),
  etag: z.string(),
  title: z.string().min(1).max(255),
  sha256: z.string().length(64),
});

export async function action(args: Route.ActionArgs) {
  if (args.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const formData = await args.request.formData();
  const parseResult = schema.safeParse({
    docId: formData.get("docId"),
    etag: formData.get("etag"),
    title: formData.get("title"),
    sha256: formData.get("sha256"),
  });

  if (!parseResult.success) {
    return new Response(
      JSON.stringify({ errors: z.treeifyError(parseResult.error) }),
      {
        status: 422,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const { docId, etag, title, sha256 } = parseResult.data;

  console.log("TODO: Finalize upload", { docId, etag, title, sha256 });
}
