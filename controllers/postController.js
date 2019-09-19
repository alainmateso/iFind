import models from '../models';
import responseHelper from '../helpers/responseHelper';
import strings from '../helpers/stringsHelper';
import servicePost from '../services/servicePost';

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

  static async getOnePost(req, res) {
    const { id } = req.params;
    models.posts.findOne({
      where: {
        id,
      },
      include: [{ // Notice include takes an ARRAY
        model: models.users,
        as: 'user',
      }],
    }).then((post) => {
      if (!post) {
        return responseHelper(res, 404, strings.posts.errorMessages.POST_NOT_FOUND);
      }
      const onePost = {
        full_name: `${post.user.first_name} ${post.user.last_name}`,
        email: post.user.email,
        phonenumber: post.user.phonenumber,
        description: post.description,
        category_id: post.category_id,
        type: post.type,
        resolved: post.resolved,
      };
      return responseHelper(res, 200, strings.posts.successMessages.POST_FOUND, onePost);
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

  static async deletePost(req, res) {
    const {body} = req;
    const { id } = req.params;
    if (isNaN(id)){
        return responseHelper(res, 400, strings.posts.errorMessages.EMPTY_ID, id);
    }
    try { 
         models.posts.findOne({
            where: {
                id: parseInt(id)
            }
        }).then((post) => {

            if(post === null) {
                return responseHelper(res, 400, strings.posts.errorMessages.POST_NOT_FOUND);
            }
            if(post.user_id === body.user.id || body.user.is_admin === true)
                post.destroy().then(() => {
                    return responseHelper(res, 201, strings.posts.successMessages.SUCCESSFULLY_DELETED_POST);              
                })
            
            return responseHelper(res, 201, strings.posts.errorMessages.NOT_ALLOWED);                          
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
            return responseHelper(res, 404, strings.posts.errorMessages.POST_NOT_FOUND);
          } else {
            return responseHelper(res, 201, strings.posts.successMessages.SUCCESSFULLY_UPDATED_POST);
          }
        } catch (error) {
            return responseHelper(res, 404,error);
        }

    }
}
