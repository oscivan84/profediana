import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { ProductEntity } from './product.entity';

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<ProductEntity>, 
    options: IPaginationOptions): Promise<Pagination<ProductEntity>> {
    return paginate<ProductEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  }
}