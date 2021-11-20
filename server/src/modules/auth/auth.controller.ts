import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestContext } from '../../common/utils/request-context';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiBody } from '@nestjs/swagger';
import { LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: [LoginDto] })
  public async login(@Request() request: RequestContext) {
    const user = request.user;
    const access_token = await this.authService.login(user);
    return { access_token }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public async profile(@Request() request: RequestContext) {
    return request.user;
  }
}
