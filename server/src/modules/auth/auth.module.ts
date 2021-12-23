import { Module } from '@nestjs/common';
import { AuthService } from './application/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './application/local.strategy';
import { jwtOptions } from './application/constants';
import { JwtStrategy } from './application/jwt.strategy';
import { AuthController } from './infrastructure/auth.controller';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory:() => ({
        secret: process.env.APP_KEY,
        signOptions: jwtOptions,
      })
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
