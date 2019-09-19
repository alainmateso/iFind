import Joi from '@hapi/joi';

export const idValidator = (data) => {
  const schema = Joi.object().keys({
    id: Joi.number().integer().required(),
  });
  return schema.validate(data);
};
