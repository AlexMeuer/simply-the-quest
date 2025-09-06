import z from "zod";

console.log("env", import.meta.env);
export const ENV = z // ENV VARS
  .object({
    minioEndpoint: z.string(),
    minioPort: z.coerce.number().default(9000),
    minioUseSsl: z.coerce.boolean().default(false),
    minioAccessKey: z.string().min(1, "MinIO access key is required"),
    minioSecretKey: z.string().min(1, "MinIO secret key is required"),
  })
  .parse({
    minioEndpoint: import.meta.env.VITE_MINIO_ENDPOINT,
    minioPort: import.meta.env.VITE_MINIO_PORT,
    minioUseSsl: import.meta.env.VITE_MINIO_USESSL,
    minioAccessKey: import.meta.env.VITE_MINIO_ACCESS_KEY,
    minioSecretKey: import.meta.env.VITE_MINIO_SECRET_KEY,
  });
