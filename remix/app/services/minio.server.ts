import { Client } from "minio";
import { ENV } from "~/constants.server";

const minio = new Client({
	endPoint: ENV.minioEndpoint,
	port: ENV.minioPort,
	useSSL: ENV.minioUseSsl,
	accessKey: ENV.minioAccessKey,
	secretKey: ENV.minioSecretKey,
});

const TEN_MINUTE_EXPIRY = 600;

export async function presignUpload(bucket: string, object: string) {
	return minio.presignedPutObject(bucket, object, TEN_MINUTE_EXPIRY);
}
