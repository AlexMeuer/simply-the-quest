import { z } from "zod";

export const env = z
  .object({
    DATABASE_URL: z.url(),
    NEO4J_URI: z.url(),
    NEO4J_USER: z.string(),
    NEO4J_PASS: z.string(),
  })
  .parse({
    DATABASE_URL: import.meta.env.VITE_DATABASE_URL,
    NEO4J_URI: import.meta.env.VITE_NEO4J_URI,
    NEO4J_USER: import.meta.env.VITE_NEO4J_USER,
    NEO4J_PASS: import.meta.env.VITE_NEO4J_PASS,
  });
