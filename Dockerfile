FROM node:20.8-alpine
ENV PORT=80
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install 
RUN npm run build
ENV NODE_ENV=production
EXPOSE 80
CMD ["npm", "run", "start"]
