import { Controller, Get, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const usersServise = new UsersService();
    return usersServise.getAllUsers();
  }

  @Post()
  createUser() {
    const newUser = {
      id: 1,
      name: 'john',
      age: 30,
      gender: 'male',
      isMarried: false,
    };
    const usersServise = new UsersService();
    const createdUser = usersServise.createUser(newUser);
    return `A new user has been created ${createdUser}`
  }

  @Patch()
  makeUpdate() {
    return 'I have just updated my username';
  }
}

@Controller('non-users')
export class NonUsersController {
  @Get()
  getAllNonUsers() {
    const usersServise = new UsersService();
    return usersServise.getAllNonUsers();
  }
}
