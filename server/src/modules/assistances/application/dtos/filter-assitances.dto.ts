import { IsNumber, IsOptional } from "class-validator";
import { PaginateDto } from "src/common/dto/paginate.dto";

export class FilterAssistancDto extends PaginateDto{
  @IsOptional()
  @IsNumber()
  enrollmentId: number;
}