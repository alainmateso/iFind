import crypto from 'crypto-random-string';
import mailHelper from './mailHelper';
import responseHelper from './responseHelper';
import strings from './stringsHelper';
import models from '../models';

export function generateVerificationToken(userId, email, res) {
  models.VericationToken.create({
    userId,
    token: crypto(10),
  }).then((verificationToken) => {
    if (mailHelper(email, verificationToken.token)) {
      return responseHelper(res, 201, strings.users.verificationMessages.successMessages.SUCCESSFULLY_CREATED_USER);
    }
    return responseHelper(res, 201, strings.users.verificationMessages.errorMessages.UNABLE_TO_CREATE_VERIFICATION);
  });
}
