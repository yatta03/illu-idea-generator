FROM node:18-alpine

# image's user node
USER node

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN NODE_ENV=development npm ci

COPY --chown=node:node  . .

CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0"]