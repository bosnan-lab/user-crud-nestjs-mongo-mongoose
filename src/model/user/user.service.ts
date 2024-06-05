import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos';

// TODO: INFORMATION
// 1 = LOGGER

@Injectable()
export class UserService {
  // 1
  private readonly logger = new Logger(UserService.name);
  private user = [{ id: '1', name: 'Brayan Cordova' }];

  // CREATE USER
  async createUserService(createUserDto: CreateUserDto) {
    this.logger.log('Creating User in Service');
    return { createUserDto };
  }

  // FIND ALL USERS
  async findAllUsersService() {
    return this.user;
  }

  // FIND ONE USER BY ID
  async findOneUserByIdService(id: string) {
    const user = this.user.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User not found with ID-${id}`);
    }

    return user;
  }

  // UPDATE USER (PATCH)
  async updateUserService(updateUserDto: any, id: string) {
    console.log(updateUserDto, id);
    return {};
  }

  // DELETE USER BY ID (HARD DELETE)
  async deleteUserByIdService(id: string) {
    console.log(id);
    return {};
  }
}
