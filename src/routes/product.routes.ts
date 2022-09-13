import { Router } from 'express';
import ProductController from '../controllers/product.controller';
// import validationProduct from '../middlewares/product.middleware';

const router = Router();

const booksController = new ProductController();

router.post('/products', booksController.create);
router.get('/products', booksController.getAll);

export default router;