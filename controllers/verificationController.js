import models from '../models';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';
import { signUserToken } from '../helpers/tokenHelper';

export default class VerifiCationController {
    static async checkVerified(req, res){
        const { token, email } = req.query;
        models.users.findOne({
        where: {
            email,
        },
        }).then((user) => {
            if (user.is_verified) {
                return responseHelper(res, 202, strings.users.verificationMessages.errorMessages.EMAIL_ALREADY_VERIFIED)
            }
            models.VericationToken.count({
            where: {
                token,
            },
            }).then((count) => {
                if (count > 0) {
                user.update({
                    is_verified: true,
                }).then(() => {
                    const access_token = signUserToken(user);
                    return responseHelper(res, 200, strings.users.verificationMessages.successMessages.SUCCESSFULLY_VERIFIED_USER, {token: access_token});
                })
                }else{
                    return responseHelper(res, 202, strings.users.verificationMessages.errorMessages.INVALID_TOKEN);

                }
            });
        });
    }
}
