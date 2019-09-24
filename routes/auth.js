import { Router } from 'express';
import {
  checkSignUp, verifyExistence, checkSignIn, verifyIsActive,
} from '../middlewares/authMiddleware';
import userController from '../controllers/authentication/userController';

const router = new Router();

router.post('/signup', checkSignUp, verifyExistence, (req, res) => userController.signupUser(req, res));
router.post('/signin', verifyIsActive, checkSignIn, (req, res) => userController.signinUser(req, res));

export default router;
