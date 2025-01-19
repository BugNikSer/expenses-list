import { Module } from "@nestjs/common";
import { TypeRouter } from "./type.router";
import { TypeService } from "./type.service";

@Module({
  providers: [TypeRouter, TypeService],
})
export class TypeModule {}