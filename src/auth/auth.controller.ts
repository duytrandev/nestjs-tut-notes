import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() newUser: AuthDTO) {
    try {
      return this.authService.register(newUser);
    } catch (error) {
      return error.message;
    }
  }
  @Post('login')
  login() {
    return;
  }
}
