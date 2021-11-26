import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OmitType } from '@nestjs/mapped-types';
import { PaginateDto } from '../../common/dto/paginate.dto';

export class CreateDetailDto {
  @IsNotEmpty()
  @IsNumber()
  public invoiceId: number;

  @IsNotEmpty()
  @IsString()
  public detailableType: string;

  @IsNotEmpty()
  @IsNumber()
  public detailableId: number;

  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @IsNotEmpty()
  @IsNumber()
  public amount: number;
}

export class SearchTypeDto extends OmitType(PaginateDto, ['querySearch'] as const) {
  @IsNotEmpty()
  @IsString()
  public querySearch: string;
}