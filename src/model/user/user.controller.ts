import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dtos';

// TODO: INFORMATION
// 1 = INJECT USER SERVICE
// 2 =

@Controller('user')
export class UserController {
  constructor(
    // 1
    private readonly userService: UserService,
  ) {}

  // CREATE USER
  @Post('create-user')
  async createUserController(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUserService(createUserDto);

    return user;
  }

  // FIND ALL USERS
  @Get('find-all-users')
  async findAllUsersController() {
    return await this.userService.findAllUsersService();
  }

  // FIND ONE USER BY ID
  @Get('find-one-user-by-id/:id')
  async findOneUserByIdController(@Param('id') id: string) {
    return await this.userService.findOneUserByIdService(id);
  }

  // UPDATE USER (PATCH)
  @Patch('update-user/:id')
  async updateUserController(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.updateUserService(updateUserDto, id);
  }

  // DELETE USER BY ID (HARD DELETE)
  @Delete('delete-user/:id')
  async deleteUserByIdController(@Param('id') id: string) {
    return await this.userService.deleteUserByIdService(id);
  }
}
