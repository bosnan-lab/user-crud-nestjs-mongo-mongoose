import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

// TODO: INFORMATION
// 1 = LOGGER
// 2 = SET GLOBAL PREFIX
// 3 = GLOBAL PIPES CONFIGURATION
// 4 =

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1
  app.useLogger(app.get(Logger));

  // 2
  app.setGlobalPrefix('api');

  // 3
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(Number(3000));
}
bootstrap();
