import { Router } from 'express';
import categoryController from '../controllers/categorycontroller';
import { validateToken } from '../helpers/tokenHelper';
import { checkCategory } from '../middlewares/categoryMiddleware';

const router = new Router();

router.post('/', validateToken, checkCategory, categoryController.Addcategory);
router.get('/', (req, res) => categoryController.allCategories(req, res));

export default router;
