# Dockerfile para o frontend Next.js
FROM node:18-alpine AS base

# Instalar dependências da biblioteca
FROM base AS lib-deps
RUN apk add --no-cache libc6-compat
WORKDIR /lib
COPY package.json tsconfig.json ./
COPY utils ./utils
COPY index.ts ./
RUN npm install && npm run build

# Instalar dependências do frontend
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY frontend/package.json frontend/yarn.lock* frontend/package-lock.json* frontend/pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Build do frontend
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY frontend/ ./

# Copiar biblioteca construída
COPY --from=lib-deps /lib/dist ../dist
COPY --from=lib-deps /lib/package.json ../package.json
COPY --from=lib-deps /lib/utils ../utils
COPY index.ts ../index.ts

# Desabilitar telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Imagem de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/app ./app

# Copiar a biblioteca para que esteja disponível em runtime
COPY --from=lib-deps --chown=nextjs:nodejs /lib/dist ../dist
COPY --from=lib-deps --chown=nextjs:nodejs /lib/package.json ../package.json
COPY --from=lib-deps --chown=nextjs:nodejs /lib/utils ../utils

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]