import { Injectable } from "@nestjs/common";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { EnrollmentsService } from "src/modules/enrollments/application/enrollments.service";
import { UsersService } from "src/modules/users/users.service";
import { ScheduleRepository } from "../domain/schedule.repository";

@Injectable()
export class SchedulesService {
  constructor(
    private scheduleRepository: ScheduleRepository,
    private usersService: UsersService,
    private enrollmanetsService: EnrollmentsService) { }

  public async findSchedule(id: number) {
    return await this.scheduleRepository.findOneOrFail(id);
  }

  public async findTeacher(id: number) {
    const schedule = await this.scheduleRepository.findOneOrFail(id);
    return await this.usersService.findOrFail(schedule.teacherId);
  }

  public async getEnrollments(id: number, filter: PaginateDto) {
    const schedule = await this.scheduleRepository.findOneOrFail(id);
    return await this.enrollmanetsService.getEnrollments({
      scheduleId: schedule.id,
      ...filter
    });
  }
}