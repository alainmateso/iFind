import jwt from 'jsonwebtoken';


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
