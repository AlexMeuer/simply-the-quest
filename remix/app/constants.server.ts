import z from "zod";

export const ENV = z // ENV VARS
  .object({
    minioEndpoint: z.string(),
    minioPort: z.coerce.number().default(9000),
    minioUseSsl: z.coerce.boolean().default(false),
    minioAccessKey: z.string().min(1, "MinIO access key is required"),
    minioSecretKey: z.string().min(1, "MinIO secret key is required"),
    neo4jUri: z.url(),
    neo4jUser: z.string().min(1, "Neo4j user is required"),
    neo4jPassword: z.string().min(1, "Neo4j password is required"),
  })
  .parse({
    minioEndpoint: import.meta.env.VITE_MINIO_ENDPOINT,
    minioPort: import.meta.env.VITE_MINIO_PORT,
    minioUseSsl: import.meta.env.VITE_MINIO_USESSL,
    minioAccessKey: import.meta.env.VITE_MINIO_ACCESS_KEY,
    minioSecretKey: import.meta.env.VITE_MINIO_SECRET_KEY,
    neo4jUri: import.meta.env.VITE_NEO4J_URI,
    neo4jUser: import.meta.env.VITE_NEO4J_USER,
    neo4jPassword: import.meta.env.VITE_NEO4J_PASSWORD,
  });
