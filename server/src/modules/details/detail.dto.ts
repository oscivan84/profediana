import * as Joi from 'joi';

export const CreateDetailDto = Joi.object({
  invoiceId: Joi.number().required(),
  detailableType: Joi.string().required(),
  detailableId: Joi.number().required(),
  price: Joi.number().required(),
  amount: Joi.number().required(),
});