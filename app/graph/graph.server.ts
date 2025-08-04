import neo4j from "neo4j-driver";
import type { z } from "zod";
import { env } from "~/env.server";

export const driver = neo4j.driver(
  env.NEO4J_URI,
  neo4j.auth.basic(env.NEO4J_USER, env.NEO4J_PASS),
);

export async function run<T>(
  cypher: string,
  params: unknown,
  resultSchema: z.ZodSchema<T>,
) {
  const session = driver.session();
  try {
    const res = await session.run(cypher, params);
    const rows = res.records.map((r) => r.toObject());
    return resultSchema.parse(rows);
  } finally {
    await session.close();
  }
}
