import { Injectable } from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { jwtAuthInput } from './modules/auth/constants';

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {}

  public async login(input: jwtAuthInput) {
    const user = await this.authService.validateUser(input);
    const token = await this.authService.login(user);
    return token;
  }
}