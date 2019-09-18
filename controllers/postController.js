import models from '../models';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';


export default class PostController {
  static async createPost(req, res) {
    const user_id = req.user.payload.id;
    const { description, category_id, type } = req.body;
    const newPost = {
      user_id, description, category_id, resolved: false, type,
    };
    try {
      const createdPost = await models.posts.create(newPost);
      return responseHelper(
        res, 201, strings.posts.successMessages.ITEM_POSTED_SUCCESSFULLY, createdPost,
      );
    } catch (error) {
      return error;
    }
  }
}
