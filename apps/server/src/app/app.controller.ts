import {
  Body,
  Controller, Get,
  Post
} from '@nestjs/common';
import { UserService } from '@nutri/server-data-access-user';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('user')
  async createUser(@Body() userData: CreateUserDto) {
    const { username, email } = userData;
    return this.userService.createUser({
      username: username,
      email,
    });
  }
  @Get('users')
  async getUsers() {
    return this.userService.users({});
  }
}
