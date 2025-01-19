import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    CategoryModule,
    TypeModule,
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
