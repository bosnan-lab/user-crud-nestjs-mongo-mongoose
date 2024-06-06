import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { Users } from '../entities';
import { UserRepository } from './user.repository';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UserModel } from '../schemas/mongoose';

@Injectable()
export class UserMongoRepository implements UserRepository {
  constructor(@InjectModel(Users.name) private readonly userModel: UserModel) {}

  async createUserService(createUserDto: CreateUserDto): Promise<Users> {
    const userCreated = await new this.userModel(createUserDto).save();

    return this.mapToUser(userCreated);
  }

  async findAllUsersService() {
    const allUsers = await this.userModel.find().lean();

    return allUsers.map((user) => this.mapToUser(new this.userModel(user)));
  }

  async findOneUserByIdService(id: string): Promise<Users> {
    const oneUser = await this.userModel.findById(id).lean();

    return this.mapToUser(oneUser);
  }

  async updateUserService(
    updateUserDto: UpdateUserDto,
    id: string,
  ): Promise<Users> {
    const updateUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );

    return this.mapToUser(updateUser);
  }

  async deleteUserByIdService(id: string): Promise<Users> {
    const userDeleted = await this.userModel.findByIdAndDelete(id).lean();

    return this.mapToUser(userDeleted);
  }

  private mapToUser(rawUser: UserDocument): Users {
    const user = new Users();

    user.id = rawUser.id;
    user.email = rawUser.email;
    user.age = rawUser.age;
    user.createdAt = rawUser.createdAt;
    user.updatedAt = rawUser.updatedAt;

    return user;
  }
}
