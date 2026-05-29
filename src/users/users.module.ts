import { Module } from '@nestjs/common';
import { NonUsersController, UsersController } from './users.controller';

@Module({
  controllers: [UsersController, NonUsersController],
  providers: [],
})
export class UsersModule {}
