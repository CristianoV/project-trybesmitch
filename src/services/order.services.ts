import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interfaces';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const users: Order[] = await this.model.getAll();
    return users;
  }
}

export default OrderService;