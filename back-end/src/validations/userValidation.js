const Joi = require("joi");

const createUserValidation = Joi.object({
  id: Joi.string().max(10).required(),
  role_id: Joi.string().max(5).required(),
  program_studi_id: Joi.string().max(5).required(),
  nama: Joi.string().min(3).max(50).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "edu", "id"] } })
    .required(),
  password: Joi.string().min(8).max(255).required(),
  status: Joi.string().max(5).required(),
});

const updateUserValidation = Joi.object({
  role_id: Joi.string().max(5),
  program_studi_id: Joi.string().max(5),
  nama: Joi.string().min(3).max(50),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["id", "com", "net", "edu"] } }),
  password: Joi.string().min(8).max(255),
  status: Joi.string().max(5),
});

module.exports = {
  createUserValidation,
  updateUserValidation,
};
