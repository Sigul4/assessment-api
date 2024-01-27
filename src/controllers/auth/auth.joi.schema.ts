import Joi from 'joi';

export const authValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Please fill the email',
    'string.any': 'Invalid email',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Please fill the password',
    'string.pattern.base': 'Invalid password',
  }),
});
