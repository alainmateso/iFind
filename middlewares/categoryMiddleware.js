import { validateCategory } from '../validators/categoryValidator';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';

export function checkCategory({ body }, res, next) {
  const { error } = validateCategory(body);
  if (error) { return responseHelper(res, 400, strings.category.errorMessages.categoryerror, { error: error.details[0].message }); }
  return next();
}
