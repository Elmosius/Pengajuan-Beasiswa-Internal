const Joi = require("joi");

const createProdiValidation = Joi.object({
  id: Joi.string().max(5).required(),
  nama_program_studi: Joi.string().min(3).max(20).required(),
  fakultas_id: Joi.string().max(5).required(),
});

const updateProdiValidation = Joi.object({
  nama_program_studi: Joi.string().min(3).max(20),
  fakultas_id: Joi.string().max(5),
});

module.exports = {
  createProdiValidation,
  updateProdiValidation,
};
