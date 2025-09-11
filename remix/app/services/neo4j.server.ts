import { ENV } from "~/constants.server";
import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  ENV.neo4jUri,
  neo4j.auth.basic(ENV.neo4jUser, ENV.neo4jPassword),
  {
    maxConnectionPoolSize: 100,
    connectionTimeout: 20_000,
    maxTransactionRetryTime: 15_000,
  },
);

export async function finalizeDocument(
  docId: string,
  key: string,
  etag: string,
  title: string,
  sha: string,
  size: number,
  entityId: string,
) {
  const foo = `MERGE (d:Document {id:${docId})
SET d += {uri:${key}, etag:${etag}, sha256:${sha}, size:${size}, title:${title}
WITH d MATCH (e:Entity {id:${entityId})
MERGE (d)-[:BELONGS_TO]->(e);`;
}
