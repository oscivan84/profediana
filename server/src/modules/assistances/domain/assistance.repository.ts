import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { AssistanceEntity } from "./assistance.entity";
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';

@EntityRepository(AssistanceEntity)
export class AssistanceRepository extends Repository<AssistanceEntity> {
  public async paginate(
    queryBuilder: SelectQueryBuilder<AssistanceEntity>, 
    options: IPaginationOptions): Promise<Pagination<AssistanceEntity>> {
    return paginate<AssistanceEntity>(queryBuilder, {
      page: options.page || 1,
      limit: options.limit || 30 
    });
  }
}