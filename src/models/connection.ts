import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const DB_HOSTNAME = process.env.HOST || 'db';
const DB_USER = process.env.USER || 'root';
const DB_PASSWORD = process.env.PASSWORD || 'password';

const connection = mysql.createPool({
  host: DB_HOSTNAME,
  user: DB_USER,
  password: DB_PASSWORD,
});

export default connection;