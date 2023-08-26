import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDTO } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPO')
    private usersRepo: typeof User,
  ) {}

  async getAllUsers() {
    return await this.usersRepo.findAll();
  }

  async createUser(body: UserDTO) {
    const user = {
      ...body,
    };
    await this.usersRepo.create(user);
  }
}
