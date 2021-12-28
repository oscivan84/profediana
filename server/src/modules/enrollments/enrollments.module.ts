import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentsModule } from "../students/students.module";
import { EnrollmentsService } from "./application/enrollments.service";
import { EnrollmentRepository } from "./domain/enrollment.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([EnrollmentRepository]),
    StudentsModule,
  ],
  providers: [EnrollmentsService],
  exports: [EnrollmentsService],
})
export class EnrollmentsModule {}