FROM node:lts

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm i

EXPOSE 3000

CMD ["pnpm", "dev"]
