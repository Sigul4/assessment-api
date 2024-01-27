import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res
} from '@nestjs/common';

import jwt from 'jsonwebtoken';
import { SECRET_KEY } from 'middleware/auth';

import { AuthService } from 'src/services/auth/auth.service';
import { UserService } from 'src/services/auth/user.service';
import { Login, LoginResponse } from 'src/shared/interfaces/login.interface';
import { validateRequest } from '../../utils/validations/validators';
import { authValidationSchema } from './auth.joi.schema';

@Controller('api/login')
export class AuthController {
  private authService: AuthService;
  private userService: UserService;

  constructor() {
    this.authService = new AuthService();
    this.userService = new UserService();
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  public async login(@Body() userRequest, @Res() response): Promise<LoginResponse> {
    const result = validateRequest<Login>(userRequest, 'body', authValidationSchema, );

    if (result.error) {
      return response.status(400).json({ message: result.error });
    }

    const user = await this.authService.login(userRequest);

    if (!user) {
      return response.status(401).json({ message: 'Invalid login data' });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY);

    return response.json({
      ...this.userService.userToDto(user),
      token,
    });
  }
}
