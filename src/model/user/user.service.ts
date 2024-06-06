import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { USER_REPOSITORY } from './repository';

// TODO: INFORMATION
// 1 = USER REPOSITORY
// 2 =

@Injectable()
export class UserService {
  constructor(
    // 1
    @Inject(USER_REPOSITORY) private readonly userRepository,
  ) {}

  // CREATE USER
  async createUserService(createUserDto: CreateUserDto) {
    return await this.userRepository.createUserService(createUserDto);
  }

  // FIND ALL USERS
  async findAllUsersService() {
    return await this.userRepository.findAllUsersService();
  }

  // FIND ONE USER BY ID
  async findOneUserByIdService(id: string) {
    return await this.userRepository.findOneUserByIdService(id);
  }

  // UPDATE USER (PATCH)
  async updateUserService(updateUserDto: UpdateUserDto, id: string) {
    return await this.userRepository.updateUserService(updateUserDto, id);
  }

  // DELETE USER BY ID (HARD DELETE)
  async deleteUserByIdService(id: string) {
    return await this.userRepository.deleteUserByIdService(id);
  }
}
