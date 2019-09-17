import models from '../../models';
import responseHelper from '../../helpers/responseHelper';
import strings from '../../helpers/stringsHelper';
import { compareHash } from '../../helpers/hashHelper';
import { signUserToken } from '../../helpers/tokenHelper';

const signinUser = ({ body }, res) => {
  models.users.findOne({
    where: {
      email: body.email,
    },
  }).then((user) => {
    if (user === null) {
      return responseHelper(res, 404, strings.users.errorMessages.USER_NOT_FOUND_SIGNIN_REQUEST);
    }
    if (compareHash(user.dataValues.password, body.password)) {
      const token = signUserToken(user);
      return responseHelper(res, 201, strings.users.successMessages.SUCCESSFULLY_SIGNED_IN_USER, { token });
    }
    return responseHelper(res, 404, strings.users.errorMessages.USER_NOT_FOUND_SIGNIN_REQUEST);
  });
};

module.exports = {
  signinUser,
};
