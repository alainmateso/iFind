import models from '../../models';
import responseHelper from '../../helpers/responseHelper';
import strings from '../../helpers/stringsHelper';
import { hashPassword, compareHash } from '../../helpers/hashHelper';
import { signUserToken } from '../../helpers/tokenHelper';
import verificationHelper, { generateVerificationToken } from '../../helpers/verificationHelper'


export default class userController {
  static async signupUser({ body: { first_name, last_name, phonenumber, email, password } }, res) {
    const user = models.users.build({
     first_name,
     last_name,
     phonenumber,
     email,
      password: hashPassword(password),
    });
    
     user.save().then((user) => {
        return generateVerificationToken(user.id, first_name, email, res)
    });
  }


  static async signinUser(req, res) {
   const { user } = req.body;
      if (compareHash(user.password, req.body.password)) {
        const token = signUserToken(user);
        return responseHelper(res, 201, strings.users.successMessages.SUCCESSFULLY_SIGNED_IN_USER, { token });
      }
      return responseHelper(res, 404, strings.users.errorMessages.USER_NOT_FOUND_SIGNIN_REQUEST);
  }
  static async adminUser ({body}, res) {

  }
}
