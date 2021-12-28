import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class PaginateDto {
  @IsOptional()
  @IsNumber()
  public page: number = 1;

  @IsOptional()
  @IsNumber()
  public limit: number = 30;

  @IsOptional()
  @IsString()
  public querySearch?: string;

  @IsOptional()
  @IsNumber()
  @IsArray()
  public ids?: number[];
}