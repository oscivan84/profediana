import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { PaginateDto } from "src/common/dto/paginate.dto";

export class GetEnrollmentsDto extends PaginateDto {
  
  @IsOptional()
  @IsNumber()
  scheduleId?: number;

  @IsOptional()
  @IsNumber()
  studentId?: number;
}