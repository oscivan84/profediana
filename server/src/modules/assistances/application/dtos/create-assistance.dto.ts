import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAssistanceDto {
  @ApiProperty()
  @IsNotEmpty()
  public enrollmentId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  public date: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  public observation?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public attended: boolean;
}