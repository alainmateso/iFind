import Joi from '@hapi/joi';


export const vailidateSignin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

export const validateSignup = (data) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().trim().regex(/^[A-Za-z][A-Za-z0-9]*$/)
      .required(),
    first_name: Joi.string().trim().regex(/^[a-zA-Z]{3,10}$/).required(),
    last_name: Joi.string().trim().regex(/^[a-zA-Z]{3,10}$/).required(),
    phonenumber: Joi.string().trim().regex(/^[0-9]{3,10}$/).required(),
  });

  return schema.validate(data);
};
