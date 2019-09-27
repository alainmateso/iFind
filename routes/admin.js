import { Router } from 'express';
import AdminController from '../controllers/admincontroller';
import categoryController from '../controllers/categorycontroller';
import { validateToken } from '../helpers/tokenHelper';
import { checkCategory } from '../middlewares/categoryMiddleware';

const router = new Router();

router.patch('/activate/:id', validateToken, AdminController.ActivateUser);
router.patch('/deactivate/:id', validateToken, AdminController.DeactivateUser);
router.post('/category/', validateToken, checkCategory, categoryController.Addcategory);
router.get('/users', validateToken, AdminController.getUsers);

export default router;
