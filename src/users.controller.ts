import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getUsers() {
    return await this.usersService.getAllUsers();
  }

  @Post('/')
  async createUser(@Body() body: UserDTO) {
    await this.usersService.createUser(body);
    return 'user created';
  }
}
