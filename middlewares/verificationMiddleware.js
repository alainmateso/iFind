import crypto from 'crypto-random-string';
import models from '../models';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';
import { signUserToken } from '../helpers/tokenHelper';

export function verify(req, res, next) {
  return next();
}


export function checkIfVerified() {

}
