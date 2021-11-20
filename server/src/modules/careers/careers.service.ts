import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CareerEntity } from './career.entity';
import { CareerRepository } from './career.repository';

@Injectable()
export class CareersService {
  constructor(private careerRepository: CareerRepository) {}

  public async createCareer(payload: CareerEntity): Promise<CareerEntity> {
    try {
      const newCareer = this.careerRepository.create(payload);
      return await this.careerRepository.save(newCareer);
    } catch (error) {
      throw new InternalServerErrorException("No se pudó guardar los datos");
    }
  }
}
