const Joi = require("joi");

const createBeasiswaValidation = Joi.object({
  id: Joi.string().max(5).required(),
  nama_beasiswa: Joi.string().min(5).max(50).required(),
  deskripsi: Joi.string().min(5).max(255).required(),
  periode: Joi.string().min(2).max(25).required(),
});

const updateBeasiswaValidation = Joi.object({
  nama_beasiswa: Joi.string().min(5).max(50),
  deskripsi: Joi.string().min(5).max(255),
  periode: Joi.string().min(2).max(25),
});

module.exports = { createBeasiswaValidation, updateBeasiswaValidation };
