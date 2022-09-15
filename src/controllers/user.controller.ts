import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';
import validate from '../middlewares/validator';
import userSchema from '../middlewares/schemas';

class UserController {
  constructor(private usersService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.usersService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public create = async (req: Request, res: Response) => {
    const { body } = req;
    const error = validate(userSchema, body);
    
    if (error) return res.status(error.code).json({ message: error.data });
    const users = await this.usersService.getAll();
    if (users.find((user) => user.username === body.username)) {
      return res.status(StatusCodes.CONFLICT).json({ message: 'Username already exists' });
    }
    
    const user = await this.usersService.create(body);
    return res.status(StatusCodes.CREATED).json(user);
  };
}

export default UserController;