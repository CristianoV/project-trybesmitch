import joi from 'joi';

const userSchema = joi.object({
  username: joi.string().min(3).required().messages({
    'string.min': '422|"username" length must be at least 3 characters long',
    'any.required': '400|"username" is required',
    'string.base': '422|"username" must be a string',
  }),
  classe: joi.string().min(3).required().messages({
    'string.min': '422|"classe" length must be at least 3 characters long',
    'any.required': '400|"classe" is required',
    'string.base': '422|"classe" must be a string',
  }),
  level: joi.number().min(1).required().messages({
    'number.min': '422|"level" must be greater than or equal to 1',
    'any.required': '400|"level" is required',
    'number.base': '422|"level" must be a number',
  }),
  password: joi.string().min(8).required().messages({
    'string.min': '422|"password" length must be at least 8 characters long',
    'any.required': '400|"password" is required',
    'string.base': '422|"password" must be a string',
  }),
});

export default userSchema;