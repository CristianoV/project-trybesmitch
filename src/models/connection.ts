import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const DB_HOSTNAME = process.env.MYSQL_HOST || 'db';
const DB_USER = process.env.MYSQL_USER || 'root';
const DB_PASSWORD = process.env.MYSQL_PASSWORD || 'password';

const connection = mysql.createPool({
  host: DB_HOSTNAME,
  user: DB_USER,
  password: DB_PASSWORD,
});

export default connection;