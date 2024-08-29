import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService ) {}

    @Post('login')
    singIn(
        @Body('name') name: string,
        @Body('senha') senha: string,

    ): AuthResponseDto{
        return this.AuthService.singIn(name, senha);

    }
}
