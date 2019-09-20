import jwt from 'jsonwebtoken';
import responseHelper from './responseHelper';
import strings from './stringsHelper';

export function signUserToken(user) {
  const token = jwt.sign({
    payload: {
      id: user.id,
      is_admin: user.is_admin,
    },
  }, process.env.SECRET_KEY, {
    expiresIn: '1d',
  });
  return token;
}
export const validateToken = (req, res, next) => {
  const header = req.headers.authorization;
  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];
    try {
      const verifiedUser = jwt.verify(token, process.env.SECRET_KEY);
      req.user = verifiedUser;
      return next();
    } catch (error) {
      return responseHelper(res, 400, strings.token.errorMessages.INVALID_TOKEN);
    }
  }
  return responseHelper(res, 401, strings.token.errorMessages.SIGN_IN_FIRST);
};
