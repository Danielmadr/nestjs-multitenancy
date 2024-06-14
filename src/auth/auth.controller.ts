import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto } from './login-request.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() data: LoginRequestDto) {
    return this.authService.login(data);
  }
}
