import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserPresenter } from './user.presenter';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.userService.create(data);
    return new UserPresenter(user);
  }
}
