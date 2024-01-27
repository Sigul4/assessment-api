import 'reflect-metadata';
import { IUser } from './user.interface';

export type Role = 'user' | 'admin'; 

export interface UserDto {
  firstName: string;
  lastName: string;
  role: Role;
}

export type CreateUserDto = Omit<IUser, 'id' | 'deleted'>;

export interface UpdateUserDto extends Omit<CreateUserDto, 'password'> {
  password?: string;
}
