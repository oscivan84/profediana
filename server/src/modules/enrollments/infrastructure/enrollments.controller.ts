import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PaginateDto } from "src/common/dto/paginate.dto";
import { EnrollmentsService } from "../application/enrollments.service";

@Controller('enrollments')
@ApiTags('enrollments')
export class EnrollmentsController {
  constructor(private enrollmentsService: EnrollmentsService) { }
  
  @Get(':id/assistances')
  public async assistances(@Param('id') id: number,
    @Query() filter: PaginateDto) {
    return this.enrollmentsService.getAssistances(id, filter);
  }
}