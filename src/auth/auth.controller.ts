import { Body, Controller, Post } from '@nestjs/common';
import { SingInDto, SingUpDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('singup')
  async singup(@Body() body: SingUpDto) {
    await this.authService.singup(body);
    return this.authService.singup(body);
  }

  @Post('singin')
  async singin(@Body() body: SingInDto) {
    await this.authService.singin(body);
    return this.authService.singin(body);
  }
}
