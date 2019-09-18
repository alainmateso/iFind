import { Router } from 'express';
import authRoutes from './auth';
import postsRoutes from './posts';

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);
router.get('*', (req, res) => res.status(200).send({ message: 'This is ^Caret, Route not foun on Lost and Found' }));

export default router;
