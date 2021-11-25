import { IsNotEmpty, IsString } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import * as Joi from 'joi';
import { PaginateDto } from '../../common/dto/paginate.dto';

export const CreateInvoiceDto = Joi.object({
  transmitterType: Joi.string().required(),
  transmitterId: Joi.number().required(),
  description: Joi.string().required().max(255),
  date: Joi.date().required(),
  receiverType: Joi.string().required(),
  receiverId: Joi.number().required()
})

export class SearchReceiverDto extends OmitType(PaginateDto, ['querySearch'] as const) {
  @IsNotEmpty()
  @IsString()
  public querySearch: string;
}