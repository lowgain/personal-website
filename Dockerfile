FROM node:20-alpine3.17
ENV NODE_ENV=production
ENV PORT=80

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm i --production

COPY . .

EXPOSE 80

CMD [ "npm", "run", "start" ]