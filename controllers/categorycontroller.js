import models from '../models';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';

export default class categoryController {
//add category function 
    static async Addcategory (req, res) {
      if(req.user.payload.is_admin == true){
        models.category.findOne({
          where: {
            name:req.body.name,
            
          },
        }).then((category) => {
          if (category!== null) {
            return responseHelper(res, 409, strings.admin.errorMessages.categoryfound);
          }
          else{
            const category = models.category.build({
                name: req.body.name,
                description: req.body.description,
              });
              category.save().then(() => {
                return responseHelper(res, 201, strings.admin.successMessages.categorycreated);
              });
        }
        });
      }else
      return responseHelper(res,403,strings.protect.errorMessages.Notauthorized);
        
    }

    static async allCategories(req, res) {
      models.category.findAll().then((categories) => {
        return responseHelper(res, 200, strings.admin.successMessages.categorycreated, categories);
      })
    }
}
