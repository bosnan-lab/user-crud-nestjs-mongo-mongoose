import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos';

// TODO: INFORMATION
// 1 = LOGGER
// 2 = INJECT USER SERVICE

@Controller('user')
export class UserController {
  // 1
  private readonly logger = new Logger(UserController.name);

  constructor(
    // 2
    private readonly userService: UserService,
  ) {}

  // CREATE USER
  @Post('create-user')
  async createUserController(@Body() createUserDto: CreateUserDto) {
    this.logger.log('Creating User in Controller');

    const user = await this.userService.createUserService(createUserDto);

    this.logger.log('Finalized User in Controller');

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
    @Body() updateUserDto: any,
  ) {
    return await this.userService.updateUserService(updateUserDto, id);
  }

  // DELETE USER BY ID (HARD DELETE)
  @Delete('delete-user/:id')
  async deleteUserByIdController(@Param('id') id: string) {
    return await this.userService.deleteUserByIdService(id);
  }
}
