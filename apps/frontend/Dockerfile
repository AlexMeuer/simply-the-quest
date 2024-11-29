# This Dockerfile assumes that the context will be the entire monorepo.
# e.g. docker build . -f apps/frontend/Dockerfile
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base as install
COPY . .
RUN bun install --frozen-lockfile --production

FROM install AS install-dev
COPY --from=install /usr/src/app/node_modules node_modules
COPY . .
RUN bun install --frozen-lockfile

FROM base AS prerelease
COPY --from=install-dev /usr/src/app/node_modules node_modules
COPY . .

RUN bun run build --filter=frontend

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /usr/src/app/node_modules node_modules
COPY --from=prerelease /usr/src/app/apps/frontend/.output .
COPY --from=prerelease /usr/src/app/apps/frontend/package.json .

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "start" ]
