import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async list(): Promise<User[]> {
    return this.usersRepository.find();
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
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
