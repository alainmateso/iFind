import models from '../models';
import servicePost from '../service/servicePost';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';


export default class PostController {
  static async deletePost(req, res) {
    const { id } = req.params;
    if (isNaN(id)){
        return responseHelper(res, 400, strings.posts.errorMessages.EMPTY_ID, id);
    }
    try { 
        const a= models.posts.findOne({
            where: {
                id: parseInt(id)
            }
        }).then((post) => {

            if(post === null) {
                return responseHelper(res, 400, strings.posts.errorMessages.NO_POST_FOUND);
            }
            post.destroy().then(() => {
                return responseHelper(res, 201, strings.posts.successMessages.SUCCESSFULLY_DELETED_POST);              
            })
        })
        }catch (error) {
            throw error;
        }
    }
    static async updatePost (req, res){
        const alteredPost = req.body;
        const { id } = req.params;
        if (!Number(id)) {
            return responseHelper(res, 400, strings.posts.errorMessages.NOT_NUMBER, id);
        }
        try {
          const updatePost = await servicePost.updatePost(id, alteredPost);
          if (!updatePost) {
            return responseHelper(res, 404, strings.posts.errorMessages.NO_POST_FOUND);
          } else {
            return responseHelper(res, 201, strings.posts.successMessages.SUCCESSFULLY_UPDATED_POST);
          }
        } catch (error) {
            return responseHelper(res, 404,error);
        }

    }
}