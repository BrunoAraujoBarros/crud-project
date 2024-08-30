import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { get  } from 'http';
import { CreateUserDto } from '../users/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async list(): Promise<User[]>{
    return this.userService.list();
  }
  //Pode user .param pra lidar na URL 
  @Post('cadastrar')
  async register(@Body() data: CreateUserDto): Promise<User>{
    return this.userService.createUser(data);
  }
}
