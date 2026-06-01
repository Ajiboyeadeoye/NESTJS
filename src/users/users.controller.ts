import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

//http://localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUser(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    const userService = new UsersService();
    return userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const usersServise = new UsersService();
    return usersServise.getUserById(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    // const newUser = {
    //   id: 1,
    //   name: 'john',
    //   email: 'ajiboyesamuel@yahoo.com',
    //   gender: 'male',
    //   isMarried: false,
    // };
    const usersServise = new UsersService();
    const cretedUser = usersServise.createUser(user);
    console.log(user);
    return `A new user has been created ${cretedUser}`;
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
