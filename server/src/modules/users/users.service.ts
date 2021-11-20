import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  public async findOrFail(id: number) {
    return await this.userRepository.findOneOrFail(id);
  }

  public async findByUsername(username: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ username });
  }

  public async createUser(data: UserEntity): Promise<any> {
    try {
      const newUser = this.userRepository.create(data);
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }
}
