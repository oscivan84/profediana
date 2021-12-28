import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { EnrollmentEntity } from "./enrollment.entity";
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';

@EntityRepository(EnrollmentEntity)
export class EnrollmentRepository extends Repository<EnrollmentEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<EnrollmentEntity>, 
    options: IPaginationOptions): Promise<Pagination<EnrollmentEntity>> {
    return paginate<EnrollmentEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  }
}