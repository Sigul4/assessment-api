
import { UserDto } from 'src/shared/interfaces/user.dto.interface';

export interface Login { email: string, password: string }

export interface LoginResponse extends UserDto { token: string }
