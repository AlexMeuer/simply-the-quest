import { data, redirect, useActionData, useLoaderData } from "react-router";
import { useEffect } from "react";
import z from "zod";
import type { Route } from "./+types/edit";
import { getById, upsertDocument } from "~/services/neo4j/documents";

const FormSchema = z.object({
	title: z.string().min(1, "Title is required"),
	content: z.string().min(1, "Content is required"),
});

export async function loader({ params }: Route.LoaderArgs) {
	const doc = await getById(params.docId);
	if (!doc) {
		return redirect("/debug/docs");
	}
	return data({ document: doc });
}

export async function action({ request, params }: Route.ActionArgs) {
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
		const record = await upsertDocument(params.docId, title, content);
		return data({ record }, { status: 201 });
	} catch (error) {
		console.error("Error upserting document:", error);
		return data("Failed to save document", { status: 500 });
	}
}

export default function DocsDebug() {
	const loaderData = useLoaderData<typeof loader>();
	const actionData = useActionData();
	useEffect(() => {
		if (actionData) {
			alert(
				typeof actionData === "string"
					? actionData
					: JSON.stringify(actionData),
			);
		}
	}, [JSON.stringify(actionData)]);
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
								defaultValue={loaderData.document.title}
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
								defaultValue={loaderData.document.content}
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
