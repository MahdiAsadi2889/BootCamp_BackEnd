const Joi = require("joi");

const loginValidationSchema = Joi.object({

    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required()
      .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
});

module.exports = {
  loginValidationSchema,
};
