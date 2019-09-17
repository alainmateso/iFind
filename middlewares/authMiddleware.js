import { validateSignup, vailidateSignin } from '../validators/authenticationValidator';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';
import models from '../models/index';

export function checkSignUp({ body }, res, next) {
  const { error } = validateSignup(body);
  if (error) { return responseHelper(res, 400, strings.users.errorMessages.BAD_SIGNUP_REQUEST, { error: error.details[0].message }); }
  return next();
}

export function checkSignIn({ body }, res, next) {
  const { error } = vailidateSignin(body);
  if (error) { return responseHelper(res, 400, strings.users.errorMessages.BAD_SIGNUP_REQUEST, { error: error.details[0].message }); }
  return next();
}


export function verifyExistence({ body: { email } }, res, next) {
  models.users.count({
    where: {
      email,
    },
  }).then((count) => {
    if (count > 0) return responseHelper(res, 400, strings.users.errorMessages.USER_ALREADY_EXISTS);
    return next();
  });
}
