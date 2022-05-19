FROM node:18-alpine as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN yarn install
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
