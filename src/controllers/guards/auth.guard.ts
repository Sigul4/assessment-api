import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import jwt, { Secret } from 'jsonwebtoken';
import { Observable } from 'rxjs';

export const SECRET_KEY: Secret = process.env.TOKEN_KEY || 'secret';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext, ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['x-token'];

    if (!token) {
      return false;
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      request.user = decoded;

      return true;
    } catch (e) {
      return false;
    }
  }
}
