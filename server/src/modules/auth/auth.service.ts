import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/user.entity';
import { jwtAuthInput } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser({ username, password }: jwtAuthInput): Promise<UserEntity> {
    const user = await this.usersService.findByUsername(username);
    // verificar usuario
    if (!user) throw new UnauthorizedException("El usuario no existe!!!");
    // validar contraseña
    if (user.password !== password) throw new UnauthorizedException("La contraseña es incorrecta");
    // result
    return user;
  }

  async login(user: UserEntity): Promise<string> {
    // payload token JWT
    const payload = { 
      username: user.username, 
      sub: user.id 
    };
    // response token
    return this.jwtService.sign(payload);
  }
}
