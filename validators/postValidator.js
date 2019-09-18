import Joi from '@hapi/joi';

const validator = (req, res, schema, next) => {
  const { error: validationErrors } = Joi.validate(req.body, schema, {
    abortEarly: false,
  });
  if (validationErrors) {
    const error = [];
    const { details: errors } = validationErrors;
    errors.forEach((element) => {
      error.push(element.message.split('"').join(''));
    });
    return res.status(400).json({
      status: res.statusCode,
      error,
    });
  }
  next();
};
export const createPostValidation = (req, res, next) => {
  const schema = Joi.object({
    description: Joi.string().trim().required(),
    category_id: Joi.number().required(),
    type: Joi.string().trim().required(),
  });
  validator(req, res, schema, next);
};
