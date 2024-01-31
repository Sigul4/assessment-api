import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';

@Controller('api/user')
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }
  
  @Get()
  @UseGuards(AuthGuard)
  getUserAssessments() {
    return this.userService.getAllUsers();
  }

  @Delete('/:userId')
  @UseGuards(AdminGuard)
  deleteUserAssessment(@Param('userId') userId: number): Promise<void> {
    return this.userService.deleteUser(userId);
  }

}
