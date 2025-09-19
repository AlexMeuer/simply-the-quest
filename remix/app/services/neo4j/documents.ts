import { type Integer, int, type Node } from "neo4j-driver";
import z from "zod";
import { startSession } from "./driver.server";

const Document = z.object({
  id: z.ulid(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});
type Document = z.infer<typeof Document>;
type UnknownNode = Node<Integer>;
type DocumentReturn = { d: UnknownNode; e: UnknownNode };
type OutboxReturn = { d: UnknownNode; e: UnknownNode };

export async function upsertDocument(
  docId: string,
  title: string,
  content: string,
): Promise<Document | undefined> {
  const session = startSession();

  try {
    const result = await session.executeWrite((tx) =>
      tx.run<DocumentReturn & OutboxReturn>(
        // TODO: Consider adding optimistic locking with version property.
        `
// Upsert Document and emit a single OutboxEvent (no optimistic lock, no temp flags)
MERGE (d:Document { id: $docId })
ON CREATE SET
  d.createdAt = datetime()
SET
  d.title     = $title,
  d.content   = $content,
  d.updatedAt = datetime(),
  d.deletedAt = NULL

// Create the outbox event in the same transaction.
// We infer create vs update by comparing createdAt vs updatedAt:
//  - On create, both are set "now" → equal
//  - On update, createdAt is older, updatedAt is "now" → not equal
  WITH d, (d.createdAt = d.updatedAt) AS wasCreated
  CREATE (e:OutboxEvent {
    id:           randomUUID(),
    stream:       'meilisearch.documents',
    op:           CASE WHEN wasCreated THEN 'insert' ELSE 'update' END,
    aggregate:    'Document',
    aggregateId:  d.id,
    docId:        d.id,
    title:        d.title,
    content:      d.content,
    status:       'pending',
    retries:      0,
    createdAt:    datetime()
  })
RETURN d, e;
`,
        {
          docId,
          title,
          content,
        },
      ),
    );
    const record = Document.parse(result.records.at(0)?.get("d").properties);
    console.log("UPSERT | DOCUMENT | ", record);
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
        "MATCH (d:Document) WHERE d.deletedAt IS NULL ORDER BY d.updatedAt DESC RETURN d SKIP $skip LIMIT $limit",
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
      tx.run(
        `MATCH (d:Document { id: $id })
SET d.deletedAt  = datetime()

WITH d
CREATE (e:OutboxEvent {
  id:           randomUUID(),
  stream:       'meilisearch.documents',
  op:           'delete',
  aggregate:    'Document',
  aggregateId:  d.id,
  docId:        d.id,
  status:       'pending',
  retries:      0,
  createdAt:    datetime()
})
RETURN d, e;`,
        { id },
      ),
    );
  } finally {
    await session.close();
  }
}
