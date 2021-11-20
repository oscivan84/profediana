import * as Joi from 'joi';

export const CreatePaymentDto = Joi.object({
  invoiceId: Joi.number().required(),
  paymentServiceId: Joi.number().required(),
  price: Joi.number().required(),
  datetime: Joi.date().iso().required(),
  cancelled: Joi.boolean().required()
});