import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.VITE_DATABASE_URL) {
  throw new Error(
    "VITE_DATABASE_URL is not defined in the environment variables.",
  );
}

export default defineConfig({
  out: "./drizzle",
  schema: "./app/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.VITE_DATABASE_URL,
  },
});
