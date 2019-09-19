import express from 'express';
import PostController from '../controllers/postController';

const router = express.Router();

router.delete('/:id',PostController.deletePost);
router.put('/:id',PostController.updatePost);
export default router;