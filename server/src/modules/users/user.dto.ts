import * as Joi from 'joi';

export const CreateUserDto = Joi.object({
  name: Joi.string().required().max(20),
  lastname: Joi.string().required().max(40),
  username: Joi.string().required().max(12).min(6),
  email: Joi.string().email().required().max(40),
  password: Joi.string().trim().required().min(6).max(12),
  roleId: Joi.number().required(),
  companyId: Joi.number().required(),
  sedeId: Joi.number().required()
});