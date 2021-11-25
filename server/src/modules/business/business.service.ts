import { Injectable } from '@nestjs/common';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { CompanyRepository } from './company.repository';

@Injectable()
export class BusinessService {
  constructor(private companyRepository: CompanyRepository) {}

  public async getBusiness(input: PaginateDto) {
    const queryBuilder = this.companyRepository.createQueryBuilder('com');
    queryBuilder.where(`com.name like '%${input.querySearch || ''}%'`);
    return await this.companyRepository.paginate(queryBuilder, input);
  }
}
