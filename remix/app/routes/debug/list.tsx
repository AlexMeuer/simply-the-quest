import { data, Outlet, redirect, useFetcher } from "react-router";
import z from "zod";
import { deleteById, listDocuments } from "~/services/neo4j/documents";
import type { Route } from "./+types/list";

export async function loader({ context }: Route.LoaderArgs) {
	const docs = await listDocuments();
	return data({ documents: docs });
}

export async function action({ request }: Route.ActionArgs) {
	if (request.method === "DELETE") {
		const formData = await request.formData();
		await deleteById(z.string().parse(formData.get("id")));
		return redirect("/debug/docs");
	}
}

export default function DocumentList({ loaderData }: Route.ComponentProps) {
	const { documents } = loaderData;
	const fetcher = useFetcher();
	return (
		<div className="flex h-screen">
			{/* Left Section */}
			<div className="w-1/2 p-16 border-r border-gray-300">
				<ul>
					{documents.map((doc) => (
						<li key={doc.id} className="mb-2 p-2 rounded">
							<div className="flex items-baseline gap-4">
								<h2 className="text-lg font-semibold">{doc.title}</h2>
								<a
									href={`/debug/docs/${doc.id}`}
									className="text-gray-700 hover:text-cyan-200"
								>
									{doc.id}
								</a>
								<button
									className="ml-auto text-xs font-bold text-gray-700 hover:text-red-700 hover:cursor-pointer"
									onClick={(e) =>
										fetcher.submit({ id: doc.id }, { method: "DELETE" })
									}
								>
									Delete
								</button>
							</div>
							<p className="text-sm text-gray-600 line-clamp-2">
								{doc.content}
							</p>
							<p className="text-xs text-gray-500">
								Created: {doc.createdAt?.toLocaleString() ?? "n/a"} | Updated:{" "}
								{doc.updatedAt?.toLocaleString() ?? "n/a"}
							</p>
						</li>
					))}
				</ul>
			</div>
			{/* Right Section */}
			<div className="w-1/2 p-4">
				<Outlet />
			</div>
		</div>
	);
}
