import express from 'express';
import multipart from 'connect-multiparty';
import PostController from '../controllers/postController';
import { createPostValidation, validateImage } from '../validators/postValidator';
import { validateToken } from '../helpers/tokenHelper';
import { checkId } from '../middlewares/idMiddleware';

const {
  createPost, getAllPosts, getOnePost, markPostAsResolved,
} = PostController;

const router = express.Router();
const multipartyMiddleware = multipart();

router.post('/', validateToken, multipartyMiddleware, createPostValidation, validateImage, createPost);
router.get('/', getAllPosts);
router.get('/:id', checkId, getOnePost);
router.delete('/:id', validateToken, PostController.deletePost);
router.put('/:id', validateToken, checkId, PostController.updatePost);
router.patch('/resolved/:id', checkId, validateToken, markPostAsResolved);

export default router;
