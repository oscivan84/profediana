import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { PaginateDto } from '../../../common/dto/paginate.dto';
import { reciverTypeEnum, transmitterTypeEnum } from './invoice.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(transmitterTypeEnum)
  public transmitterType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public transmitterId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  public description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  public date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(reciverTypeEnum)
  public receiverType: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public receiverId: number
}

export class SearchReceiverDto extends OmitType(PaginateDto, ['querySearch'] as const) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public querySearch: string;
}