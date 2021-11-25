import { Injectable } from '@nestjs/common';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { CampusRepository } from './campus.repository';

@Injectable()
export class CampusesService {
  constructor(private campusRepository: CampusRepository) {}

  public async getCampuses(input: PaginateDto) {
    const queryBuilder = this.campusRepository.createQueryBuilder('cam');
    queryBuilder.where(`cam.name like '%${input.querySearch}%'`);
    return await this.campusRepository.paginate(queryBuilder, input);
  }
}
