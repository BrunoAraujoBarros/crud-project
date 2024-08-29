import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './user.entity';
import { get  } from 'http';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UserService) {}

  @Get('listar')
  async listar(): Promise<user[]>{
    return this.UserService.listar();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: CreateUserDto): Promise<user>{
    return this.UserService.createUser(data);
  }
}
