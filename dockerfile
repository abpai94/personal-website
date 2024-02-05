FROM node:latest as build-stage
WORKDIR /personal-website
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /personal-website
COPY --from=build-stage /personal-website/dist /personal-website
COPY nginx.conf /etc/nginx/nginx.conf