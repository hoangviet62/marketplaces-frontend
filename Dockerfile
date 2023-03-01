FROM 16.19-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./
RUN apk add --no-cache git \
  && yarn install --frozen-lockfile \
  && yarn cache clean

COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]