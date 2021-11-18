import { EntityRepository, Repository } from 'typeorm';
import { AlumnoEntity } from './alumno.entity';

@EntityRepository(AlumnoEntity)
export class AlumnoRepository extends Repository<AlumnoEntity> {}