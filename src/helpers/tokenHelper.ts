import { sign, verify } from 'jsonwebtoken';
import User from '../interfaces/user.interfaces';

const JWT_SECRET = 'S3nh4S3gur4Qu3N3mS3J4T3m';

const JWT_CONFIG: object = { algorithm: 'HS256', expiresIn: '120min' };

const createToken = (payload: User) => {
  const token = sign(payload, JWT_SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token: string) => {
  const dados = verify(token, JWT_SECRET);
  return dados;
};

export default { createToken, verifyToken };
