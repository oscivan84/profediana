import { Body, Controller, Post } from '@nestjs/common';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiBody({ type: [UserEntity] })
  public async store(@Body(new JoiValidationPipe(CreateUserDto)) paylaod) {
    return await this.usersService.createUser(paylaod);
  }
}
