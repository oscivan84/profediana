import * as Joi from 'joi';

export const CreateCareerDto = Joi.object({
  campusId: Joi.number().required(),
  name: Joi.string().required().max(40),
  description: Joi.string().required().max(255)
});