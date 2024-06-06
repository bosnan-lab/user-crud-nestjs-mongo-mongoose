import { CreateUserDto, UpdateUserDto } from '../dtos';
import { Users } from '../entities';

export const USER_REPOSITORY = 'UserRepository';

export interface UserRepository {
  createUserService(createUserDto: CreateUserDto): Promise<Users>;

  findAllUsersService(): Promise<Users[]>;

  findOneUserByIdService(id: string): Promise<Users>;

  updateUserService(updateUserDto: UpdateUserDto, id: string): Promise<Users>;

  deleteUserByIdService(id: string): Promise<Users>;
}
