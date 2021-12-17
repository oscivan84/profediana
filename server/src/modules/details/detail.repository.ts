import { Repository, EntityRepository, SelectQueryBuilder } from 'typeorm';
import { DetailEntity } from './detail.entity';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';

@EntityRepository(DetailEntity)
export class DetailRepository extends Repository<DetailEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<DetailEntity>, 
    options: IPaginationOptions): Promise<Pagination<DetailEntity>> {
    return paginate<DetailEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  } 
}