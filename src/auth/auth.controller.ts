import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';

@ApiTags('Login')
@Controller('login')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() loginDto: LoginDto) {
        const { login, Contrasenia } = loginDto;
        const valid = await this.authService.validateUser(login, Contrasenia);
        if (!valid) {
            throw new UnauthorizedException("No es un usuario valido!");
        }

        return await this.authService.generateAccessToken(login);
    }
}
