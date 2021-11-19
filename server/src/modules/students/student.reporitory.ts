import { EntityRepository, Repository } from 'typeorm';
import { StudentEntity } from './students.entity';

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {}