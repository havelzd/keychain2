import { Module } from "@nestjs/common";
import { DbWrapper } from "./db-wrapper.service";

@Module({
  controllers: [],
  providers: [DbWrapper],
  exports: [],
})
export class DbModule {}
