import * as Joi from 'joi';
import { IsNotEmpty, IsString } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { PaginateDto } from 'src/common/dto/paginate.dto';

export const CreateDetailDto = Joi.object({
  invoiceId: Joi.number().required(),
  detailableType: Joi.string().required(),
  detailableId: Joi.number().required(),
  price: Joi.number().required(),
  amount: Joi.number().required(),
});

export class SearchTypeDto extends OmitType(PaginateDto, ['querySearch'] as const) {
  @IsNotEmpty()
  @IsString()
  public querySearch: string;
}