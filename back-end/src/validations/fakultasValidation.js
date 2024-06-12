const Joi = require("joi");

const createFakultasValidation = Joi.object({
  id: Joi.string().max(5).required(),
  nama_fakultas: Joi.string().min(3).max(20).required(),
});

const updateFakultasValidation = Joi.object({
  nama_fakultas: Joi.string().min(3).max(20),
});

module.exports = {
  createFakultasValidation,
  updateFakultasValidation,
};
