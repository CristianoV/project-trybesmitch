import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interfaces';
import token from '../helpers/tokenHelper';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async create(book: User) {
    const createUser = await this.model.create(book);
    const TOKEN = token.createToken(createUser);
    
    return { token: TOKEN };
  }
}

export default UserService;