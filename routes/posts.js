import { Router } from 'express';
import PostController from '../controllers/postController';

const router = new Router();

router.get('/', PostController.getAllPosts);

export default router;
