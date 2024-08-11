/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import cookieParser from 'cookie-parser';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


import { AppModule } from './app/app.module';
import { ConfigService } from '@nutri/server-config';
import express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);

  app.use(express.json());
  app.use(cookieParser())
  app.enableCors({
    origin: /^https?:\/\/localhost(:\d+)?$/,
    credentials: true
  });
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(config.globalPrefix);
  setupSwagger(app);

  await app.listen(config.port());
  Logger.log(
    `🚀 Application is running on: http://localhost:${config.port()}/${config.globalPrefix}`
  );
}

function setupSwagger(app) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nutri API')
    .setDescription('Internal REST API documentation')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('internal/swagger', app, document);
}

bootstrap();
