import { Module } from "@nestjs/common";
import { CategoryRouter } from "./category.router";
import { CategoryService } from "./category.service";

@Module({
  providers: [CategoryRouter, CategoryService],
})
export class CategoryModule {}