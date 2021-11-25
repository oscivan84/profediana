import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { StudentEntity } from './students.entity';

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<StudentEntity>, 
    options: IPaginationOptions): Promise<Pagination<StudentEntity>> {
    return paginate<StudentEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  }
}