import { ENV } from "~/constants.server";
import { auth, driver as neo4jDriver, type RecordShape } from "neo4j-driver";

const driver = neo4jDriver(
  ENV.neo4jUri,
  auth.basic(ENV.neo4jUser, ENV.neo4jPassword),
  {
    maxConnectionPoolSize: 100,
    connectionTimeout: 20_000,
    maxTransactionRetryTime: 15_000,
  },
);

export async function upsertDocument(
  docId: string,
  title: string,
  content: string,
): Promise<RecordShape | undefined> {
  const session = driver.session();

  try {
    const result = await session.executeWrite((tx) =>
      tx.run(
        "MERGE (d:Document {id:$docId}) SET d += {title:$title, content:$content} RETURN d",
        {
          docId,
          title,
          content,
        },
      ),
    );
    const record = result.records.at(0)?.toObject();
    console.log("UPSERT | RECORD | ", record);
    return record;
  } finally {
    await session.close();
  }
}

export async function finalizeDocument(
  docId: string,
  entityId: string,
  key: string,
  etag: string,
  title: string,
  sha: string,
) {
  const cypher = `MERGE (d:Document {id:"${docId}")
SET d += {uri:"${key}", etag:${etag}, sha256:"${sha}", title:"${title}"
WITH d MATCH (e:Entity {id:"${entityId}")
MERGE (d)-[:BELONGS_TO]->(e);`;

  console.log("FINALIZE | CYPHER | ", cypher);
  const session = driver.session();
  try {
    const result = await session.executeWrite((tx) => tx.run(cypher));
    console.log("FINALIZE | RESULT | ", result);
  } finally {
    await session.close();
  }
}
