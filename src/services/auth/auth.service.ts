import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcryptjs';
import { knexInstance } from 'db';
import { USER_TABLE_NAME } from 'src/database/constants/tables.constant';
import { Login } from 'src/shared/interfaces/login.interface';
import { IUser } from 'src/shared/interfaces/user.interface';

@Injectable()
export class AuthService {
  public async login(userData: Login): Promise<IUser> {

    const users: IUser[] = await knexInstance.select<IUser[]>('first_name', 'last_name', 'role', 'email', 'password').from(USER_TABLE_NAME).where('email', userData.email);

    if (!users.length) {
      throw new NotFoundException('User not found');
    }

    const user: IUser = users[0];
    
    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid login data');
    }
    
    return users[0];
  }
}
