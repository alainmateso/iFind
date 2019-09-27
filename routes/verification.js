import { Router } from 'express';
import verificationController from '../controllers/verificationController';

const router = new Router();


router.get('/', (req, res) => verificationController.checkVerified(req, res));

export default router;
