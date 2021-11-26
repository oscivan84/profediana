import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  public async getProducts(input: PaginateDto) {
    const queryBuilder = this.productRepository.createQueryBuilder('pro');
    queryBuilder.where(`name like '%${input.querySearch || ''}%'`);
    queryBuilder.orWhere(`description like '%${input.querySearch || ''}%'`);
    queryBuilder.orWhere(`code like '%${input.querySearch || ''}%'`);
    return await this.productRepository.paginate(queryBuilder, input);
  }

  public async createProduct(payload: ProductEntity): Promise<ProductEntity> {
    try {
      const newProduct = this.productRepository.create(payload)
      return await this.productRepository.save(newProduct);
    } catch (error) {
      throw new InternalServerErrorException("No se puede guardar los datos");
    }
  }
}
