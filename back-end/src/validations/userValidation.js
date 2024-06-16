const Joi = require("joi");

const createUserValidation = Joi.object({
  id: Joi.string().max(5).required(),
  role_id: Joi.string().max(5).required(),
  program_studi_id: Joi.string().max(5).required(),
  nama: Joi.string().min(5).max(50).required(),
  password: Joi.string().min(8).max(255).required(),
  status: Joi.string().max(5).required(),
});

const updateUserValidation = Joi.object({
  role_id: Joi.string().max(5),
  program_studi_id: Joi.string().max(5),
  nama: Joi.string().min(5).max(50),
  password: Joi.string().min(8).max(255),
  status: Joi.string().max(5),
});

module.exports = {
  createUserValidation,
  updateUserValidation,
};
