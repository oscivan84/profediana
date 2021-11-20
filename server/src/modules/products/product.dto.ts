import * as Joi from 'joi';

export const CreateProductDto = Joi.object({
  name: Joi.string().required().max(40),
  description: Joi.string().required().max(255),
  productTypeId: Joi.number().required(),
  stock: Joi.number().required(),
  code: Joi.string().required().max(45),
  purchase_price: Joi.number().required().max(10),
  sale_price: Joi.number().required().max(10),
})