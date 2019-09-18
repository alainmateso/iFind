
import express from 'express';
import PostController from '../controllers/postController';
import { createPostValidation } from '../validators/postValidator';
import { validateToken } from '../helpers/tokenHelper';

const { createPost } = PostController;

const router = express.Router();

router.post('/', validateToken, createPostValidation, createPost);

export default router;
