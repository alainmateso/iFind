import express from 'express';
import PostController from '../controllers/postController';
import { createPostValidation } from '../validators/postValidator';
import { validateToken } from '../helpers/tokenHelper';
import { checkId } from '../middlewares/idMiddleware';

const { createPost, getAllPosts, getOnePost } = PostController;

const router = express.Router();

router.post('/', validateToken, createPostValidation, createPost);
router.get('/', getAllPosts);
router.get('/:id', checkId, getOnePost);

export default router;
