const Joi = require("joi");

const createPendaftaranDetailValidation = Joi.object({
  pendaftaran_id: Joi.number().integer().required(),
  user_id: Joi.string().max(10).required(),
  beasiswa_id: Joi.string().max(5).required(),
  ipk: Joi.number().precision(2).min(0).max(4).required(),
  poin_portofolio: Joi.number().integer().min(0).required(),
  status_1: Joi.string().max(3).required(),
  status_2: Joi.string().max(3).required(),
  dokumen: Joi.array()
    .items(
      Joi.object({
        jenis_doc_id: Joi.number().integer().required(),
        path: Joi.string()
          .max(255)
          .required()
          .custom((value, helpers) => {
            if (!value.endsWith(".pdf")) {
              return helpers.message("Path must be a PDF file");
            }
            return value;
          }),
      })
    )
    .required(),
});

const updatePendaftaranDetailValidation = Joi.object({
  pendaftaran_id: Joi.number().integer(),
  user_id: Joi.string().max(10),
  beasiswa_id: Joi.string().max(5),
  ipk: Joi.number().precision(2).min(0).max(4),
  poin_portofolio: Joi.number().integer().min(0),
  status_1: Joi.string().max(3),
  status_2: Joi.string().max(3),
  dokumen: Joi.array().items(
    Joi.object({
      jenis_doc_id: Joi.number().integer().required(),
      path: Joi.string()
        .max(255)
        .required()
        .custom((value, helpers) => {
          if (!value.endsWith(".pdf")) {
            return helpers.message("Path must be a PDF file");
          }
          return value;
        }),
    })
  ),
});

module.exports = { createPendaftaranDetailValidation, updatePendaftaranDetailValidation };
