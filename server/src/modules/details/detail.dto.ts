import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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

export class FilterDetail {
  public invoiceId?: number;
  public detailableType?: string;
}