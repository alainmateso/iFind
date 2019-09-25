import { Router } from 'express';
import authRoutes from './auth';
import postRoutes from './posts';
import adminRoutes from './admin';
import categoryRoutes from './categories';
import verificationRoutes from './verification';

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/admin', adminRoutes);
router.use('/category', categoryRoutes);
router.use('/verify', verificationRoutes);
router.get('*', (req, res) => res.status(404).send({ message: 'This is ^Caret, Route not foun on Lost and Found' }));

export default router;
