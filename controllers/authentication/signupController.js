import models from '../../models';
import responseHelper from '../../helpers/responseHelper';
import strings from '../../helpers/stringsHelper';
import { hashPassword } from '../../helpers/hashHelper';
import { signUserToken } from '../../helpers/tokenHelper';

const signupUser = ({ body }, res) => {
  const user = models.users.build({
    first_name: body.first_name,
    last_name: body.last_name,
    phonenumber: body.phonenumber,
    email: body.email,
    password: hashPassword(body.password),
  });
  user.save().then((newUser) => {
    const token = signUserToken(user);
    return responseHelper(res, 201, strings.users.successMessages.SUCCESSFULLY_CREATED_USER, { token });
  });
};

module.exports = {
  signupUser,
};
