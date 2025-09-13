import { ENV } from "~/constants.server";
import { auth, driver as neo4jDriver } from "neo4j-driver";

const driver = neo4jDriver(
  ENV.neo4jUri,
  auth.basic(ENV.neo4jUser, ENV.neo4jPassword),
  {
    maxConnectionPoolSize: 100,
    connectionTimeout: 20_000,
    maxTransactionRetryTime: 15_000,
  },
);

export function startSession() {
  return driver.session();
}
