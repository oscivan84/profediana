import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { CompanyEntity } from './company.entity';

@EntityRepository(CompanyEntity)
export class CompanyRepository extends Repository<CompanyEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<CompanyEntity>, 
    options: IPaginationOptions): Promise<Pagination<CompanyEntity>> {
    return paginate<CompanyEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  }
}