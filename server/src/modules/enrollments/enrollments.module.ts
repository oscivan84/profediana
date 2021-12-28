import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssistancesModule } from "../assistances/assistances.module";
import { StudentsModule } from "../students/students.module";
import { EnrollmentsService } from "./application/enrollments.service";
import { EnrollmentRepository } from "./domain/enrollment.repository";
import { EnrollmentsController } from "./infrastructure/enrollments.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([EnrollmentRepository]),
    StudentsModule,
    AssistancesModule,
  ],
  providers: [EnrollmentsService],
  controllers: [EnrollmentsController],
  exports: [EnrollmentsService],
})
export class EnrollmentsModule {}