import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { jwtAuthInput } from './modules/auth/constants';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('login')
  public async login(@Body() jwtAuthInput: jwtAuthInput) {
    const access_token = await this.appService.login(jwtAuthInput);
    return { access_token }
  }

}
