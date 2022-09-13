import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interfaces';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  }

  public async create(book: Product): Promise<Product> {
    const { title, amount, orderId } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, amount, orderId) VALUES (?, ?, ?)',
      [title, amount, orderId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}