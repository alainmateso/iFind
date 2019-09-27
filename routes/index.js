import { Router } from 'express';
import authRoutes from './auth';
import postRoutes from './posts';
import adminRoutes from './admin';
import swaggerRoutes from './swagger';

const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/admin', adminRoutes);
router.use('/api-docs', swaggerRoutes);
router.get('*', (req, res) => res.status(404).send({ message: 'This is ^Caret, Route not found on Lost and Found' }));

export default router;
