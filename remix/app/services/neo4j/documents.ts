import { int, Integer, Node } from "neo4j-driver";
import { startSession } from "./driver.server";

import z from "zod";

const Document = z.object({
	id: z.ulid(),
	title: z.string(),
	content: z.string(),
	createdAt: z.coerce.date().optional(),
	updatedAt: z.coerce.date().optional(),
});
type Document = z.infer<typeof Document>;
type UnknownNode = Node<Integer>;
type DocumentReturn = { d: UnknownNode };

export async function upsertDocument(
	docId: string,
	title: string,
	content: string,
	createdAt?: Date,
): Promise<Document | undefined> {
	const session = startSession();

	try {
		const result = await session.executeWrite((tx) =>
			tx.run<DocumentReturn>(
				"MERGE (d:Document {id:$docId})\
ON CREATE SET d += {createdAt:$now}\
SET d += {title:$title, content:$content, updatedAt: $now}\
RETURN d",
				{
					docId,
					title,
					content,
					now: new Date().toISOString(),
				},
			),
		);
		const record = Document.parse(result.records.at(0)?.get("d").properties);
		console.log("UPSERT | RECORD | ", record);
		return record;
	} finally {
		await session.close();
	}
}

export async function listDocuments(skip = 0, limit = 10): Promise<Document[]> {
	const session = startSession();

	try {
		const result = await session.executeRead((tx) =>
			tx.run<DocumentReturn>(
				"MATCH (d:Document) RETURN d SKIP $skip LIMIT $limit",
				{ skip: int(skip), limit: int(limit) },
			),
		);
		return result.records.map((r) => Document.parse(r.get("d").properties));
	} finally {
		await session.close();
	}
}

export async function getById(id: string): Promise<Document | null> {
	const session = startSession();
	try {
		const result = await session.executeRead((tx) =>
			tx.run<DocumentReturn>("MATCH (d:Document {id:$id}) RETURN d LIMIT 1", {
				id,
			}),
		);
		const record = result.records.at(0)?.get("d").properties;
		return record ? Document.parse(record) : null;
	} finally {
		await session.close();
	}
}

export async function deleteById(id: string): Promise<void> {
	const session = startSession();
	try {
		await session.executeWrite((tx) =>
			tx.run("MATCH (d:Document {id:$id}) DETACH DELETE d", { id }),
		);
	} finally {
		await session.close();
	}
}
