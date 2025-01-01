import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from './trpc/trpc.module';
import environment from '../environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [environment],
    }),
    TrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
