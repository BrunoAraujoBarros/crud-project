import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserProviders } from './users.providers'; 
import { UserService } from './user.service'; 
import { UsersController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...UserProviders,
    UserService,

  ],
  exports:[
    UserService
  ]
})
export class UserModule {}