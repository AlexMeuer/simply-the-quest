import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  import.meta.env.VITE_NEO4J_URI,
  neo4j.auth.basic(
    import.meta.env.VITE_NEO4J_USER,
    import.meta.env.VITE_NEO4J_PASS,
  ),
);

// TODO: Use zod to parse and validate results.
export async function run<T>(
  cypher: string,
  params: Record<string, unknown> = {},
) {
  const session = driver.session();
  try {
    const res = await session.run(cypher, params);
    return res.records.map((r) => r.toObject()) as T;
  } finally {
    await session.close();
  }
}

await run(`
  CREATE CONSTRAINT org_id     IF NOT EXISTS ON (o:Organization) ASSERT o.id IS UNIQUE;
  CREATE CONSTRAINT world_id   IF NOT EXISTS ON (w:World)        ASSERT w.id IS UNIQUE;
  CREATE CONSTRAINT camp_id    IF NOT EXISTS ON (c:Campaign)     ASSERT c.id IS UNIQUE;
  CREATE CONSTRAINT quest_id   IF NOT EXISTS ON (q:Quest)        ASSERT q.id IS UNIQUE;
  CREATE CONSTRAINT char_id    IF NOT EXISTS ON (c:Character)    ASSERT c.id IS UNIQUE;
  CREATE CONSTRAINT note_id    IF NOT EXISTS ON (n:Note)         ASSERT n.id IS UNIQUE;
  CREATE CONSTRAINT event_id   IF NOT EXISTS ON (e:Event)        ASSERT e.id IS UNIQUE;

  /* speedy WHERE campaign_id = $x filters */
  CREATE INDEX quest_campaign  IF NOT EXISTS FOR (q:Quest)      ON (q.campaign_id);
  CREATE INDEX char_campaign   IF NOT EXISTS FOR (c:Character)  ON (c.campaign_id);
`);

/* ---------- domain helpers ---------- */

/** Return arrays of IDs related to a quest (for Remix loader) */
export async function idsForQuest(questId: string) {
  const result = await run<{
    characterIds: string[];
    noteIds: string[];
    questIds: string[];
  }>(
    `
    MATCH (q:Quest {id:$id})
    OPTIONAL MATCH (q)<-[:INVOLVED_IN]-(c:Character)
    OPTIONAL MATCH (q)-[:HAS_NOTE]->(n:Note)
    OPTIONAL MATCH (q)-[:RELATED_TO]->(rq:Quest)
    RETURN
      collect(DISTINCT c.id) AS characterIds,
      collect(DISTINCT n.id) AS noteIds,
      collect(DISTINCT rq.id) AS questIds
  `,
    { id: questId },
  );
  return result || { characterIds: [], noteIds: [], questIds: [] };
}

/** Link a character to a quest (called from Remix action) */
export function linkCharacterToQuest(charId: string, questId: string) {
  return run(
    `MATCH (c:Character {id:$charId}), (q:Quest {id:$questId})
     MERGE (c)-[:INVOLVED_IN]->(q)`,
    { charId, questId },
  );
}
