import * as Joi from 'joi';

export const CreateStudentDto = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  documentNumber: Joi.string().required().max(12),
  address: Joi.string().required(),
  neighborhood: Joi.string().required(),
  landline: Joi.string().required(),
  phone: Joi.string().required().max(10),
  email: Joi.string().required().email().max(40),
  contact: Joi.string().required().max(30),
  affiliationId: Joi.number().required(),
  degreeId: Joi.number().required(),
  documentTypeId: Joi.number().required(),
  cityId: Joi.number().required(),
  statusId: Joi.number().required(),
  maritalStatusId: Joi.number().required(),
  sedeId: Joi.number().required(),
});