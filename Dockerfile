FROM node:20.8-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY ./src ./src
RUN npm run build
RUN rm -rf node_modules
RUN npm ci --only=production

FROM alpine:latest as production
RUN apk --no-cache add nodejs ca-certificates
WORKDIR /root/
COPY --from=builder /usr/src/app ./
CMD [ "node", "dist/app" ]

# ENV PORT=80
# RUN mkdir /app
# WORKDIR /app
# COPY . /app
# RUN npm install 
# RUN npm run build
# ENV NODE_ENV=production
# EXPOSE 80
# CMD ["npm", "run", "start"]
