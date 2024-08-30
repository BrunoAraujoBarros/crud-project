import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from '../users/user.module';


@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      global: true,
      imports:[],
      useFactory: async(ConfigService: ConfigService) => ({
        secret: ConfigService.get<string>('JWT_SECRET'),
        signOptions: {expiresIn: +ConfigService.get<number>('JWT_EXPiRATION_TIME')}
      }),
      inject:[ConfigService]

    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
