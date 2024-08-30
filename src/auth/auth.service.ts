import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
     ){
        this.jwtExpirationTimeInSeconds = +this.configService.get<number>('JWT_EXPIRATION_TIME')
     }

     async signIn(email: string, password: string): Promise<{token: string, expiresIn : number}> {
        const foundUser = await this.userService.findOneByEmail(email)
        if(foundUser?.password !== password){
            throw new UnauthorizedException();
        }
        const payload = {id: foundUser.id, email : foundUser.email}

        const token = await this.jwtService.signAsync(payload)
        console.log(token)

        return {token, expiresIn: this.jwtExpirationTimeInSeconds}
     }
}
