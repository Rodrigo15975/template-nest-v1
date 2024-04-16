import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookie from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  // Habilitar el rawBody para stripe
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  const port = process.env.PORT || 4000;
  // configurar enableCors
  app.enableCors({
    origin:
      'https://661e1304c349fa94c02b7802--chimerical-sprinkles-88ae7d.netlify.app',
    credentials: true,
    methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookie());
  await app.listen(port);
}
bootstrap();
