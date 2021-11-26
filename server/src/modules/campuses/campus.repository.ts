import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { CampusEntity } from './campus.entity';

@EntityRepository(CampusEntity)
export class CampusRepository extends Repository<CampusEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<CampusEntity>, 
    options: IPaginationOptions): Promise<Pagination<CampusEntity>> {
    return paginate<CampusEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  }
}