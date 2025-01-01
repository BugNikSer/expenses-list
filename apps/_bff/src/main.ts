import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';
import environment from '../environment';

const envVars = environment();

async function bootstrap() {
  console.log('====================== bootstrap')
  const app = await NestFactory.create(AppModule);
  console.log('====================== app created')
  app.enableCors();
  console.log('====================== cors enabled')
  const trpc = app.get(TrpcRouter);
  console.log('====================== trpc got')
  await trpc.applyMiddleware(app);
  console.log('====================== middleware applied')
  await app.listen(envVars.port);
  console.log('====================== listening port')
}
bootstrap();
