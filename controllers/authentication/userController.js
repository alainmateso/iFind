import models from '../../models';
import responseHelper from '../../helpers/responseHelper';
import strings from '../../helpers/stringsHelper';
import { hashPassword, compareHash } from '../../helpers/hashHelper';
import { signUserToken } from '../../helpers/tokenHelper';
import verificationHelper, { generateVerificationToken } from '../../helpers/verificationHelper'


export default class userController {
  static async signupUser({ body }, res) {
    const user = models.users.build({
      first_name: body.first_name,
      last_name: body.last_name,
      phonenumber: body.phonenumber,
      email: body.email,
      password: hashPassword(body.password),
    });
    user.save().then((user) => {
      return generateVerificationToken(user.id, user.email, res)
    });
  }


  static async signinUser({ body }, res) {
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
  }
  static async adminUser ({body}, res) {

  }
}
