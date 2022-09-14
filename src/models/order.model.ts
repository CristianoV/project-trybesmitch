import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interfaces';

export default class OrderModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }
    
  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders o
      inner join Trybesmith.Products as p
      on p.orderId = o.id
      group by o.id
      order by o.userId`);
    const [rows] = result;
    return rows as Order[];
  }
}