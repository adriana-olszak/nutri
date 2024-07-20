import {
  Body,
  Controller, Get,
  Post
} from '@nestjs/common';
import { UserService } from '@nutri/server-data-access-user';


@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('user')
  async createUser(@Body() userData: { name?: string; email: string }) {
    const { name, email } = userData;
    return this.userService.createUser({
      name,
      email,
    });
  }
  @Get('users')
  async getUsers() {
    return this.userService.users({});
  }
}
