import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService ) {}

    @Post('login')
    singIn(
        @Body('email') email: string,
        @Body('password') password: string,
        
    ){
        return this.authService.signIn(email, password);
        
    }
    
}
