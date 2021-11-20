import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestContext } from './common/utils/request-context';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() request: RequestContext) {
    const user = request.user;
    const access_token = await this.appService.login(user);
    return { access_token }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public async profile(@Request() request: RequestContext) {
    return request.user;
  }

}
