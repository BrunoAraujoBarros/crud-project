import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { user } from './user.entity';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<user>,
  ) {}

  async listar(): Promise<user[]> {
    return this.usersRepository.find();
  }
  async createUser(createUserDto: CreateUserDto): Promise<user> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
    // para retonar o erro no .then eno .chach 
    //tem que se ciar uma interface com os dtos de entarda e de saida
    //os de saida com estatus e mensagem 
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
}
