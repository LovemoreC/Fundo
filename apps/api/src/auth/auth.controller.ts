import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body('username') username: string) {
    return this.authService.login(username);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  profile(@Request() req: any) {
    return req.user;
  }
}
