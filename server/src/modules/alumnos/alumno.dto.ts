import * as Joi from 'joi';

export const CreateAlumnoDto = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  numerodocumento: Joi.string().required().max(12),
  direccion: Joi.string().required(),
  barrio: Joi.string().required(),
  telefonofijo: Joi.string().required(),
  telefonomovil: Joi.string().required().max(10),
  correoelectronico: Joi.string().required().email().max(40),
  contacto: Joi.string().required().max(30),
  afiliacioneps_idafiliacioneps: Joi.number().required(),
  nivelacademico_idnivelacademico: Joi.number().required(),
  documento_iddocumento: Joi.number().required(),
  ciudad_idciudad: Joi.number().required(),
  idestadoalumno: Joi.number().required(),
  idestadocivil: Joi.number().required(),
  id_sede: Joi.number().required(),
});