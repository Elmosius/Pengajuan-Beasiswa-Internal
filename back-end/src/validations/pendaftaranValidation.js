const Joi = require("joi");

const createPendaftaranValidation = Joi.object({
  id: Joi.number().required(),
  periode: Joi.string().max(25).required(),
  start_at: Joi.date().iso().required(),
  end_at: Joi.date().iso().greater(Joi.ref("start_at")).required(),
  status: Joi.string().max(5).required(),
});

const updatePendaftaranValidation = Joi.object({
  periode: Joi.string().max(25),
  start_at: Joi.date().iso(),
  end_at: Joi.date().iso().greater(Joi.ref("start_at")),
  status: Joi.string().max(5),
});

module.exports = {
  createPendaftaranValidation,
  updatePendaftaranValidation,
};
