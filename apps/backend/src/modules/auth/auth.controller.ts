import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import type { Request } from 'express';
import { AuthService } from './auth.service';

import type { LoginDTO, RegisterDTO, UserResponseDTO } from './dto/auth.dto';
import { IsPublic } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @IsPublic(true)
  register(@Body() registerDto: RegisterDTO): Promise<UserResponseDTO> {
    return this.authService.register(registerDto);
  }
  @Post('login')
  @IsPublic(true)
  login(@Body() loginDto: LoginDTO): Promise<UserResponseDTO> {
    return this.authService.login(loginDto);
  }

  @Get()
  validate(@Req() request: Request): UserResponseDTO {
    return this.authService.validate(request.user!);
  }
}
