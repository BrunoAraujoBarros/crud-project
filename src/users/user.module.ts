import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserProviders } from './users.providers'; 
import { UserService } from './user.service'; 
import { UsersController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  //Utilizado dentro do excopo
  providers: [
    ...UserProviders,
    UserService,

  ],
  //Que vai ser usado fora do excopo
  exports:[
    UserService
  ]
})
export class UserModule {}