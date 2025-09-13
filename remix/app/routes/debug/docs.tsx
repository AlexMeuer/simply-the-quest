import { data, useActionData } from "react-router";
import type { Route } from "./+types/docs";
import { useEffect } from "react";
import { upsertDocument } from "~/services/neo4j.server";
import { ulid } from "~/services/ulid.server";
import z from "zod";

const FormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export async function action({ request }: Route.ActionArgs) {
  const rawFormData = await request.formData();
  const parseResult = FormSchema.safeParse({
    title: rawFormData.get("title"),
    content: rawFormData.get("content"),
  });

  if (!parseResult.success) {
    return data({ errors: parseResult.error }, { status: 422 });
  }
  const { title, content } = parseResult.data;

  try {
    const record = await upsertDocument(ulid(), title, content);
    return data({ record }, { status: 201 });
  } catch (error) {
    console.error("Error upserting document:", error);
    return data("Failed to save document", { status: 500 });
  }
}

export default function DocsDebug() {
  const data = useActionData();
  useEffect(() => {
    if (data) {
      alert(typeof data === "string" ? data : JSON.stringify(data));
    }
  }, [data]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md border p-6">
        <h1 className="text-center mb-6 text-2xl font-bold text-gray-700">
          Docs Debug
        </h1>
        <form method="post" className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-300">
              Title:
              <input
                type="text"
                name="title"
                required
                className="w-full p-2 rounded border border-gray-300"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-300">
              Content:
              <textarea
                name="content"
                required
                className="h-[50svh] w-full p-2 rounded border border-gray-300"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="p-2 rounded bg-gray-600 hover:bg-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
