FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install --force

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
