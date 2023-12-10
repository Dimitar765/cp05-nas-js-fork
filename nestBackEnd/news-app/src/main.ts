import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.use(
    session({
      secret: 'some secret',
      resave: false,
      saveUninitialized: false,
      store: new PrismaSessionStore(
        new PrismaClient({
          datasources: {
            db: {
              url: process.env.DATABASE_URL,
            },
          },
        }),

        {
          checkPeriod: 2 * 60 * 1000, //ms
          dbRecordIdIsSessionId: true,
          dbRecordIdFunction: undefined,
        },
      ),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
