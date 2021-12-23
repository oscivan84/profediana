import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  public async validate(username, password) {
    const user = await this.authService.validateUser({ username, password } as LoginDto);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}