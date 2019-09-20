import { Router } from 'express';
import authRoutes from './auth';
import postRoutes from './posts';
import adminRoutes from './admin';

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/admin', adminRoutes);
router.get('*', (req, res) => res.status(404).send({ message: 'This is ^Caret, Route not foun on Lost and Found' }));

export default router;
