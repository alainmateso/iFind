import express from 'express';
import PostController from '../controllers/postController';
import { createPostValidation } from '../validators/postValidator';
import { validateToken } from '../helpers/tokenHelper';
import { checkId } from '../middlewares/idMiddleware';

const {
  createPost, getAllPosts, getOnePost, markPostAsResolved,
} = PostController;

const router = express.Router();

router.post('/', validateToken, createPostValidation, createPost);
router.get('/', getAllPosts);
router.get('/:id', checkId, getOnePost);
router.patch('/resolved/:id', checkId, validateToken, markPostAsResolved);

export default router;
