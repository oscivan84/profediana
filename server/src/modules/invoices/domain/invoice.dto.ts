import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { PaginateDto } from '../../../common/dto/paginate.dto';
import { reciverTypeEnum, transmitterTypeEnum } from './invoice.enum';

export class CreateInvoiceDto {
  @IsNotEmpty()
  @IsEnum(transmitterTypeEnum)
  public transmitterType: string;

  @IsNotEmpty()
  @IsNumber()
  public transmitterId: number;

  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsDate()
  public date: Date;

  @IsNotEmpty()
  @IsEnum(reciverTypeEnum)
  public receiverType: string

  @IsNotEmpty()
  @IsNumber()
  public receiverId: number
}

export class SearchReceiverDto extends OmitType(PaginateDto, ['querySearch'] as const) {
  @IsNotEmpty()
  @IsString()
  public querySearch: string;
}