import { sha256 } from "@oslojs/crypto/sha2";
import { encodeHexLowerCase } from "@oslojs/encoding";
import { addDays, differenceInDays, isPast } from "date-fns";
import { eq } from "drizzle-orm";
import { db } from "~/db/db.server";
import {
  authSession,
  authSession as sessionTable,
  user as userTable,
} from "~/db/schema";
import type { AuthSession, User } from "~/db/zod";

export type SessionValidationResult =
  | { session: AuthSession; user: User }
  | { session: null; user: null };

export function generateSessionToken(): string {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

export async function validateToken(
  token: string,
): Promise<SessionValidationResult> {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const result = await db
    .select({ user: userTable, session: sessionTable })
    .from(sessionTable)
    .innerJoin(userTable, eq(sessionTable.userId, userTable.id))
    .where(eq(sessionTable.id, sessionId));

  if (result.length < 1) {
    return { session: null, user: null };
  }
  const { user, session } = result[0];

  if (isPast(session.expiresAt)) {
    await db.delete(sessionTable).where(eq(sessionTable.id, session.id));
    return { session: null, user: null };
  }

  if (differenceInDays(session.expiresAt, new Date()) <= 15) {
    session.expiresAt = addDays(new Date(), 30);
    await db
      .update(sessionTable)
      .set({
        expiresAt: session.expiresAt,
      })
      .where(eq(sessionTable.id, session.id));
  }
  return { session, user };
}

export const createSession = async (token: string, userId: string) => {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session: AuthSession = {
    id: sessionId,
    userId,
    expiresAt: addDays(new Date(), 30),
  };
  await db.insert(authSession).values(session);
  return session;
};

export const invalidateSession = (sessionId: string) =>
  db.delete(authSession).where(eq(authSession.id, sessionId));
