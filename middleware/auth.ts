import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface } from 'routing-controllers';

export const SECRET_KEY: Secret = process.env.TOKEN_KEY || 'secret';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('X-Token');

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;

    next();
  } catch (e: unknown) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export class authMiddleware implements ExpressMiddlewareInterface {
  // interface implementation is optional

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('X-Token');
  
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const decoded = jwt.verify(token, SECRET_KEY);
      (req as CustomRequest).token = decoded;
  
      next();
    } catch (e: unknown) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
}