import { Router } from 'express';
import { checkSignUp, verifyExistence, checkSignIn } from '../middlewares/authMiddleware'; 
import {signupUser} from '../controllers/authentication/signupController'
import {signinUser} from '../controllers/authentication/signinController'

const router = new Router();


router.post('/signup', checkSignUp, verifyExistence, (req, res) => signupUser(req, res))
router.post('/signin', checkSignIn, (req, res) => signinUser(req, res))

export default router;