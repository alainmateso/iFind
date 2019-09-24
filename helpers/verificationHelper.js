import crypto from 'crypto-random-string';
import mailHelper from './mailHelper';
import responseHelper from './responseHelper';
import strings from './stringsHelper';
import models from '../models';

const generateVerificationToken = (userId, first_name, email, res) => {
  models.VericationToken.create({
    userId,
    token: crypto({ length: 10, type: 'base64' }),
  }).then((verificationToken) => {
    if (mailHelper(first_name, email, verificationToken.token)) {
      return responseHelper(res, 201, strings.users.verificationMessages.successMessages.SUCCESSFULLY_CREATED_USER);
    }
    return responseHelper(res, 201, strings.users.verificationMessages.errorMessages.UNABLE_TO_CREATE_VERIFICATION);
  }).catch((err) => responseHelper(res, 500, strings.system.errorMessages.SYSTEM_FAILURE));
};

module.exports = {
  generateVerificationToken,
};
