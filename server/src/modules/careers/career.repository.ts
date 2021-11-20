import { Repository, EntityRepository } from 'typeorm';
import { CareerEntity } from './career.entity';

@EntityRepository(CareerEntity)
export class CareerRepository extends Repository<CareerEntity> { }