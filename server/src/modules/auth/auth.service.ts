import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/user.entity';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public async validateUser({ username, password }: LoginDto): Promise<UserEntity> {
    try {
      const user = await this.usersService.findByUsername(username);
      // verificar usuario
      if (!user) throw new UnauthorizedException("El usuario no existe!!!");
      // validar contraseña
      if (user.password !== password) throw new UnauthorizedException("La contraseña es incorrecta");
      // result
      return user;
    } catch (error) {
      return undefined;
    }
  }

  public async login(user: UserEntity): Promise<string> {
    // payload token JWT
    const payload = { 
      username: user.username, 
      sub: user.id 
    };
    // response token
    return this.jwtService.sign(payload);
  }
}
