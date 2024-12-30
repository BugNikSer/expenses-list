import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import environment from 'environment';

const envVars = environment();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envVars.port);
}
bootstrap();
