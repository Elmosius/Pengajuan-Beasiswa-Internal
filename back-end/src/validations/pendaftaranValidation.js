const Joi = require("joi");

const createPendaftaranValidation = Joi.object({
  periode: Joi.string().max(25).required(),
  start_at: Joi.date().required(),
  end_at: Joi.date().greater(Joi.ref("start_at")).required(),
  status: Joi.string().max(5).required(),
  beasiswa_id: Joi.number().integer().required(),
});

const updatePendaftaranValidation = Joi.object({
  periode: Joi.string().max(25),
  start_at: Joi.date(),
  end_at: Joi.date().greater(Joi.ref("start_at")),
  status: Joi.string().max(5),
  beasiswa_id: Joi.number().integer(),
});

module.exports = {
  createPendaftaranValidation,
  updatePendaftaranValidation,
};
