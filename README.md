<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
 <span>Nest JS Core Version</span>
<br />
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>

## Description

User CRUD With NestJS, Mongo & Mongoose

## Installation

Run the command on:

```bash
npm install
```

or just

```bash
npm i
```

## Running the app

### watch mode

```bash
npm run start:dev
```

### production mode

```bash
npm run start:prod
```

## Test

### unit tests

```bash
npm run test
```

### e2e tests

```bash
npm run test:e2e
```

### test coverage

```bash
npm run test:cov
```

## Dependencies to install

Run the command to install necessary dependencies:

```bash
npm i class-validator class-transform class-transformer nestjs-pino pino-http @nestjs/config joi
```

Run the command to install Dev dependencies:

```bash
npm i -D pino-pretty
```

## Docker

Docker Up

```bash
docker-compose up -d mongo
```

Docker Down

```bash
docker-compose down mongo
```
