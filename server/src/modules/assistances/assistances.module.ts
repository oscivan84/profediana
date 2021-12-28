import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssistancesService } from "./application/assistances.service";
import { AssistanceRepository } from "./domain/assistance.repository";
import { AssistancesController } from "./infrastructure/assistances.controller";

@Module({
  imports: [TypeOrmModule.forFeature([AssistanceRepository])],
  providers: [AssistancesService],
  controllers: [AssistancesController],
  exports: [AssistancesService],
})
export class AssistancesModule {}