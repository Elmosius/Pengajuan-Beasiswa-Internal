const Joi = require("joi");

const createPendaftaranValidation = Joi.object({
  id: Joi.number().required(),
  nama_beasiswa: Joi.string().min(5).max(50).required(),
  deskripsi: Joi.string().min(5).max(255).required(),
  periode: Joi.string().min(5).max(25).required(),
});

const updatePendaftaranalidation = Joi.object({
  nama_beasiswa: Joi.string().min(5).max(50),
  deskripsi: Joi.string().min(5).max(255),
  periode: Joi.string().min(5).max(25),
});

module.exports = {
  createPendaftaranValidation,
  updatePendaftaranalidation,
};
