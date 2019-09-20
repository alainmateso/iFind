import Joi from '@hapi/joi';

export const validateCategory = (data) => {
  const schema = Joi.object({
    
    name:Joi.string().trim().regex(/^[a-zA-Z]{3,10}$/).required(),
    description: Joi.string().trim().regex(/^[a-zA-Z]{3,10}$/).required(),
    
  });

  return schema.validate(data);
};
