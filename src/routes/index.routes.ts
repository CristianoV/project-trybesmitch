import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import UserController from '../controllers/user.controller';

const router = Router();

const productController = new ProductController();
const userController = new UserController();

router.post('/products', productController.create);
router.get('/products', productController.getAll);
router.post('/users', userController.create);
router.get('/users', userController.getAll);

export default router;