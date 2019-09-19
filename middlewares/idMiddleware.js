import { idValidator } from '../validators/idValidator';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';

export function checkId(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const { error } = idValidator({ id });
  if (error) { return responseHelper(res, 400, strings.id.errorMessages.ID_ERROR, { error: error.details[0].message }); }
  return next();
}
