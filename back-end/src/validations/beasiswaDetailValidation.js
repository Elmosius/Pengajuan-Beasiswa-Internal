const Joi = require("joi");

const createBeasiswaDetailValidation = Joi.object({
  pendaftaran_id: Joi.number().required(),
  user_id: Joi.string().required(),
  beasiswa_id: Joi.string().required(),
  ipk: Joi.string().required(),
  poin_portofolio: Joi.string().required(),
  status_1: Joi.string().required(),
  status_2: Joi.string().required(),
  dokumen: Joi.array()
    .items(
      Joi.object({
        jenis_doc_id: Joi.number().required(),
        path: Joi.string()
          .required()
          .regex(/\.pdf$/),
      })
    )
    .required(),
});

const updateBeasiswaDetailValidation = Joi.object({
  pendaftaran_id: Joi.number().required(),
  user_id: Joi.string().required(),
  beasiswa_id: Joi.string().required(),
  ipk: Joi.string().required(),
  poin_portofolio: Joi.string().required(),
  status_1: Joi.string().required(),
  status_2: Joi.string().required(),
  dokumen: Joi.array()
    .items(
      Joi.object({
        jenis_doc_id: Joi.number().required(),
        path: Joi.string()
          .required()
          .regex(/\.pdf$/),
      })
    )
    .required(),
});

module.exports = {
  createBeasiswaDetailValidation,
  updateBeasiswaDetailValidation,
};
