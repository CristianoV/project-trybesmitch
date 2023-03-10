import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';
import validate from '../middlewares/validator';
import schema from '../middlewares/schemas';

class ProductController {
  constructor(private productsService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();
    res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { body } = req;
    const error = validate(schema.productsSchema, body);
    
    if (error) return res.status(error.code).json({ message: error.data });
    const product = await this.productsService.create(body);
    res.status(StatusCodes.CREATED).json(product);
  };
}

export default ProductController;