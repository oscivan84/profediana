import { Injectable } from "@nestjs/common";
import { Collection } from "collect.js";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { AssistancesService } from "src/modules/assistances/application/assistances.service";
import { FilterAssistancDto } from "src/modules/assistances/application/dtos/filter-assitances.dto";
import { StudentsService } from "src/modules/students/students.service";
import { EnrollmentRepository } from "../domain/enrollment.repository";
import { GetEnrollmentsDto } from "./dtos/filter-enrollments";

@Injectable()
export class EnrollmentsService {
  constructor(
    private enrollmentRepository: EnrollmentRepository,
    private studentsService: StudentsService,
    private assistancesService: AssistancesService) { }
  
  public async getEnrollments(filter: GetEnrollmentsDto) {
    const builder = this.enrollmentRepository.createQueryBuilder();
    if (filter.scheduleId) builder.andWhere(`scheduleId = ${filter.scheduleId}`);
    if (filter.studentId) builder.andWhere(`studentId = ${filter.studentId}`);
    const enrollments = await this.enrollmentRepository.paginate(builder, filter);
    const studentIds: number[] = new Collection(enrollments.items)
      .groupBy('studentId').keys().toArray() as number[];
    const students = await this.getStudents(studentIds, filter.limit);
    const studentCollection = new Collection(students.items);
    return enrollments.items.map((enroll: any) => {
      enroll.student = studentCollection.where('id', enroll.studentId as number).first();
      return enroll;
    });
  }

  public async getStudents(ids: number[], limit: number) {
    return await this.studentsService.getStudents({
      page: 1,
      limit,
      ids
    });
  }

  public async getAssistances(id: number, filter: PaginateDto) {
    const enrollment = await this.enrollmentRepository.findOneOrFail(id);
    return await this.assistancesService.getAssistances({
      ...filter,
      enrollmentId: enrollment.id
    })
  }
}