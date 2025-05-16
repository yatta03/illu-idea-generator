FROM node:18-alpine

WORKDIR /app

CMD ["sh", "-c", "npm ci && npm run dev -- --host 0.0.0.0"]