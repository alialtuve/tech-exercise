# API DOCKER FILE FOR DEVELOPMENT ENVIRONMENT
FROM node:19-alpine3.18 AS base

ENV DIR /api

WORKDIR ${DIR}

FROM base AS dev

COPY package*.json ${DIR}

RUN npm install

COPY tsconfig*.json ${DIR}

COPY /src ${DIR}/src

ENV PORT 5000

EXPOSE $PORT

CMD [ "npm", "run", "dev" ]
