import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { UserEntity } from './user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<UserEntity>, 
    options: IPaginationOptions): Promise<Pagination<UserEntity>> {
    return paginate<UserEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  }
};