import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { SchedulesService } from "../application/schedules.service";

@Controller('schedules')
@ApiTags('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) { }
  
  @Get(':id')
  public show(@Param('id') id: number) {
    return this.schedulesService.findSchedule(id);
  }

  @Get(':id/teacher')
  public teacher(@Param('id') id: number) {
    return this.schedulesService.findTeacher(id);
  }

  @Get(':id/enrollments')
  public enrollments(@Param('id') id: number, @Query() filter: PaginateDto) {
    return this.schedulesService.getEnrollments(id, filter);
  }
}