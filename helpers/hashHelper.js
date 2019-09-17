import bcrypt from 'bcrypt';

export function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}


export function compareHash(password, bodyPassword) {
  if (bcrypt.compareSync(bodyPassword, password)) return true;
  return false;
}
