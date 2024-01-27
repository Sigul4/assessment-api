import { knexInstance } from 'db';
import { handleErrors } from 'src/utils/error-heandlers/db.request.error.handler';
import { USER_TABLE_NAME } from 'src/database/constants/tables.constant';
import { FAILED_GET_USERS } from 'src/shared/constants/response.errors.constant';
import { UserDto } from 'src/shared/interfaces/user.dto.interface';
import { IUser } from 'src/shared/interfaces/user.interface';

export class UserService {

  public async getAllUsers(): Promise<UserDto[]> {
    const users: IUser[] = await handleErrors(
      knexInstance<IUser>(USER_TABLE_NAME).select('*').where('deleted', false),
      FAILED_GET_USERS
    );

    return users.map((user: IUser) => this.userToDto(user));
  }

  public userToDto(user: IUser): UserDto {
    return {
      firstName: user.first_name,
      lastName: user.last_name,
      role: user.role,
    };
  }
}
