import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { PaginateDto } from '../../common/dto/paginate.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public invoiceId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public detailableType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public detailableId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public amount: number;
}

export class SearchTypeDto extends OmitType(PaginateDto, ['querySearch'] as const) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public querySearch: string;
}

export class FilterDetail {
  @ApiProperty()
  @IsOptional()
  public invoiceId?: number;

  @ApiProperty()
  @IsOptional()
  public detailableType?: string;
}