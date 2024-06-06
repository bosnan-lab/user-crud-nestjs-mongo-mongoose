import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users } from './entities';
import { UserSchema } from './schemas/mongoose';
import { USER_REPOSITORY, UserMongoRepository } from './repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: UserMongoRepository,
    },
  ],
})
export class UserModule {}
