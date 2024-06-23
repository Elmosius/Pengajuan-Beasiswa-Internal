const Joi = require("joi");

const createBeasiswaDetailValidation = Joi.object({
  pendaftaran_id: Joi.number().required(),
  user_id: Joi.string().required(),
  beasiswa_id: Joi.string().required(),
  ipk: Joi.string().required(),
  poin_portofolio: Joi.string().required(),
  status_1: Joi.string().required(),
  status_2: Joi.string().required(),
  jenis_doc: Joi.string().required(),
});

const updateBeasiswaDetailValidation = Joi.object({
  pendaftaran_id: Joi.number(),
  user_id: Joi.string(),
  beasiswa_id: Joi.string(),
  ipk: Joi.string(),
  poin_portofolio: Joi.string(),
  jenis_doc: Joi.string(),
});

module.exports = {
  createBeasiswaDetailValidation,
  updateBeasiswaDetailValidation,
};
