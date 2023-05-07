FROM node:20-alpine3.17
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm i --production

COPY . .

EXPOSE 80

CMD ["node", "bin/www"]