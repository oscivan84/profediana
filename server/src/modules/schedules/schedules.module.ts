import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EnrollmentsModule } from "../enrollments/enrollments.module";
import { UsersModule } from "../users/users.module";
import { SchedulesService } from "./application/schedules.service";
import { ScheduleRepository } from "./domain/schedule.repository";
import { SchedulesController } from "./infrastructure/schedules.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([ScheduleRepository]),
    UsersModule,
    EnrollmentsModule,
  ],
  providers: [SchedulesService],
  controllers: [SchedulesController],
})
export class SchedulesModule {}