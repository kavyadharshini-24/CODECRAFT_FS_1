import jwt from 'jsonwebtoken';
import { config } from '../config';

const JWT_SECRET = config.JWT_SECRET;
const JWT_EXPIRATION = '1h'; // Token expiration time

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const verifyToken = (token: string): object | string => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
};