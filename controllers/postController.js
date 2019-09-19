import models from '../models';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';

export default class PostController {
  static async getAllPosts(req, res) {
    const allPosts = [];
    models.posts.findAll({
      include: [{ // Notice include takes an ARRAY
        model: models.users,
        as: 'user',
      }],
    }).then((posts) => {
      if (posts.length === 0) {
        return responseHelper(res, 404, strings.posts.errorMessages.POST_NOT_FOUND);
      }
      posts.forEach((post) => {
        allPosts.push({
          id: post.id,
          full_name: `${post.user.first_name} ${post.user.last_name}`,
          email: post.user.email,
          phonenumber: post.user.phonenumber,
          description: post.description,
          category_id: post.category_id,
          type: post.type,
          resolved: post.resolved,
        });
      });
      return responseHelper(res, 200, strings.posts.successMessages.POSTS_FOUND, allPosts);
    });
  }

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