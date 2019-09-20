import models from './../models/';
import responseHelper from './../helpers/responseHelper';
import strings from './../helpers/stringsHelper';


export default class AdminController {
    // deactive function
    static async DeactivateUser(req, res) {
      if(req.user.payload.is_admin == true){
        models.users.findOne({
          where: {
            id:req.params.id,
          },
        }).then((user) => {
            if(user === null) 
            return responseHelper(res,404, strings.admin.errorMessages.usernotfound);
            user.is_active = false;
            user.save().then(() => {
                return responseHelper(res, 200, strings.admin.successMessages.user_deactived);
            })
        });
    }else
    return responseHelper(res,403,strings.protect.errorMessages.Notauthorized);
  }

    //activate function
  static async ActivateUser(req, res) {
    if(req.user.payload.is_admin == true){
    models.users.findOne({
      where: {
        id:req.params.id,
      },
    }).then((user) => {
        if(user === null) 
        return responseHelper(res, 404, strings.admin.errorMessages.usernotfound);
        user.is_active = true;
        user.save().then(() => {
            return responseHelper(res, 200, strings.admin.successMessages.user_actived);
        })
    });
}
else
return responseHelper(res,403,strings.protect.errorMessages.Notauthorized);
}
}
