import * as Joi from 'joi';

export const CreateInvoiceDto = Joi.object({
  transmitterType: Joi.string().required(),
  transmitterId: Joi.number().required(),
  description: Joi.string().required().max(255),
  date: Joi.date().required(),
  receiverType: Joi.string().required(),
  receiverId: Joi.number().required()
})