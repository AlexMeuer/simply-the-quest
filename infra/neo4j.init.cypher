CREATE CONSTRAINT doc_id IF NOT EXISTS
FOR (d:Document)
REQUIRE d.id IS UNIQUE;

CREATE CONSTRAINT outbox_id IF NOT EXISTS
FOR (e:OutboxEvent)
REQUIRE e.id IS UNIQUE;

CREATE INDEX outbox_status_createdAt IF NOT EXISTS
FOR (e:OutboxEvent)
ON (e.status, e.createdAt);

CREATE INDEX outbox_aggregate_version IF NOT EXISTS
FOR (e:OutboxEvent)
ON (e.aggregate, e.aggregateId, e.version);
