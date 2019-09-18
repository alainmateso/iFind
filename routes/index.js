import { Router } from 'express';
import authRoutes from './auth';

const router = Router();

router.use('/auth', authRoutes);
router.get('*', (req, res) => res.status(200).send({ message: 'This is ^Caret, Route not foun on Lost and Found' }));

export default router;