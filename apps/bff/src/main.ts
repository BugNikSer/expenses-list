import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';
import environment from '../environment';

const envVars = environment();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter)
  await trpc.applyMiddleware(app);
  await app.listen(envVars.port);
}
bootstrap();
