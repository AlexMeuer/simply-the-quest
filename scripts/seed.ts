import "dotenv/config";
import { eq, type SQL } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import type { PgTable } from "drizzle-orm/pg-core";
import neo4j from "neo4j-driver";
import { Pool } from "pg";
import {
  campaign,
  character,
  event,
  faction,
  item,
  location,
  organisation,
  quest,
  gameSession as session,
  world,
} from "../app/db/schema";

if (
  !process.env.VITE_DATABASE_URL ||
  !process.env.VITE_NEO4J_URI ||
  !process.env.VITE_NEO4J_USER ||
  !process.env.VITE_NEO4J_PASS
) {
  throw new Error("Missing required environment variables.");
}

/*────────────────────────── helpers */
const pgPool = new Pool({ connectionString: process.env.VITE_DATABASE_URL });
const db = drizzle(pgPool);

const driver = neo4j.driver(
  process.env.VITE_NEO4J_URI,
  neo4j.auth.basic(process.env.VITE_NEO4J_USER, process.env.VITE_NEO4J_PASS),
);
const cypher = async (q: string, p?: Record<string, unknown>) =>
  driver
    .session()
    .run(q, p)
    .then(() => {});

type Tx = Parameters<Parameters<(typeof db)["transaction"]>[0]>[0];

async function insertIfMissing<T extends object>(
  tx: Tx,
  table: PgTable,
  values: T,
  uniqueExpr: SQL,
) {
  const existing = await tx.select().from(table).where(uniqueExpr).limit(1);
  if (existing.length) {
    return existing[0];
  }
  const [row] = (await tx.insert(table).values(values).returning()) as (T & {
    id: string;
  })[];
  return row;
}

/*────────────────────────── main */
(async () => {
  try {
    const ids = await db.transaction(async (tx) => {
      // 1 Organisation / World / Campaigns
      const org = await insertIfMissing(
        tx,
        organisation,
        { name: "Guild of Storyweavers" },
        eq(organisation.name, "Guild of Storyweavers"),
      );

      const worldRow = await insertIfMissing(
        tx,
        world,
        { name: "Averia", orgId: org.id },
        eq(world.name, "Averia"),
      );

      const campSharn = await insertIfMissing(
        tx,
        campaign,
        { name: "Shadows of Sharn", worldId: worldRow.id },
        eq(campaign.name, "Shadows of Sharn"),
      );

      // 2 Characters
      const cedric = await insertIfMissing(
        tx,
        character,
        { worldId: worldRow.id, displayName: "Sir Cedric" },
        eq(character.displayName, "Sir Cedric"),
      );
      const nyx = await insertIfMissing(
        tx,
        character,
        { worldId: worldRow.id, displayName: "Nyx the Whisper" },
        eq(character.displayName, "Nyx the Whisper"),
      );
      const bramble = await insertIfMissing(
        tx,
        character,
        { worldId: worldRow.id, displayName: "Bramble" },
        eq(character.displayName, "Bramble"),
      );

      // 3 Factions & Locations
      const enclave = await insertIfMissing(
        tx,
        faction,
        { worldId: worldRow.id, name: "Emerald Enclave" },
        eq(faction.name, "Emerald Enclave"),
      );
      const consortium = await insertIfMissing(
        tx,
        faction,
        { worldId: worldRow.id, name: "Shadow Consortium" },
        eq(faction.name, "Shadow Consortium"),
      );

      const locSharn = await insertIfMissing(
        tx,
        location,
        { worldId: worldRow.id, name: "Sharn" },
        eq(location.name, "Sharn"),
      );
      const locForest = await insertIfMissing(
        tx,
        location,
        { worldId: worldRow.id, name: "Ebonwood Forest" },
        eq(location.name, "Ebonwood Forest"),
      );

      // 4 Item & Quest
      const lostSchema = await insertIfMissing(
        tx,
        item,
        { worldId: worldRow.id, name: "Lost Schema" },
        eq(item.name, "Lost Schema"),
      );

      const questSchema = await insertIfMissing(
        tx,
        quest,
        { title: "Retrieve the Lost Schema", campaignId: campSharn.id },
        eq(quest.title, "Retrieve the Lost Schema"),
      );

      // 5 Session & Event
      const session1 = await insertIfMissing(
        tx,
        session,
        {
          campaignId: campSharn.id,
          index: 1,
          date: new Date(),
          summaryMd: "Heist night",
        },
        eq(session.index, 1),
      );

      const eventRow = await insertIfMissing(
        tx,
        event,
        {
          campaignId: campSharn.id,
          kind: "quest_accept",
          occurredAt: new Date(),
          payload: { quest: questSchema.id },
        },
        eq(event.kind, "quest_accept"),
      );

      return {
        org: org.id,
        world: worldRow.id,
        campSharn: campSharn.id,
        cedric: cedric.id,
        nyx: nyx.id,
        bramble: bramble.id,
        enclave: enclave.id,
        consortium: consortium.id,
        locSharn: locSharn.id,
        locForest: locForest.id,
        lostSchema: lostSchema.id,
        questSchema: questSchema.id,
        session1: session1.id,
        event1: eventRow.id,
      } as const;
    });

    /* 2 -- graph side */
    await cypher(
      `MERGE (o:Organization {id:$org}) SET o.name='Guild of Storyweavers'
       MERGE (w:World {id:$world}) SET w.name='Averia', w.org_id=$org
       MERGE (c1:Campaign {id:$campSharn}) SET c1.name='Shadows of Sharn', c1.world_id=$world

       MERGE (ced:Character {id:$cedric}) SET ced.display_name='Sir Cedric', ced.world_id=$world
       MERGE (nyx:Character {id:$nyx}) SET nyx.display_name='Nyx the Whisper', nyx.world_id=$world
       MERGE (bra:Character {id:$bramble}) SET bra.display_name='Bramble', bra.world_id=$world

       MERGE (enc:Faction {id:$enclave}) SET enc.name='Emerald Enclave', enc.world_id=$world
       MERGE (con:Faction {id:$cons})   SET con.name='Shadow Consortium', con.world_id=$world
       MERGE (ced)-[:MEMBER_OF]->(enc)
       MERGE (nyx)-[:MEMBER_OF]->(con)

       MERGE (loc1:Location {id:$locSharn}) SET loc1.name='Sharn', loc1.world_id=$world
       MERGE (loc2:Location {id:$locForest}) SET loc2.name='Ebonwood Forest', loc2.world_id=$world
       MERGE (ced)-[:LOCATED_AT]->(loc1)

       MERGE (q:Quest {id:$questSchema}) SET q.title='Retrieve the Lost Schema', q.campaign_id=$campSharn
       MERGE (ced)-[:INVOLVED_IN]->(q)

       MERGE (s:Session {id:$session1}) SET s.index=1, s.date=datetime(), s.campaign_id=$campSharn
       MERGE (ev:Event {id:$event1}) SET ev.kind='quest_accept', ev.occurred_at=datetime(), ev.campaign_id=$campSharn
       MERGE (s)-[:CONTAINS_EVENT]->(ev)
       MERGE (ev)-[:AFFECTS]->(ced)

       MERGE (i:Item {id:$schema}) SET i.name='Lost Schema', i.world_id=$world
       MERGE (i)-[:OWNED_BY]->(nyx)

       MERGE (ced)-[:KNOWS {affinity:8}]->(bra)
       MERGE (ced)-[:KNOWS {affinity:-8, note:'sworn enemies'}]->(nyx)`,
      {
        ...ids,
        cons: ids.consortium,
        schema: ids.lostSchema,
      },
    );

    console.log("✅ Seed completed idempotently");
  } catch (err) {
    console.error("Seed failed", err);
  } finally {
    await driver.close();
    await pgPool.end();
  }
})();
