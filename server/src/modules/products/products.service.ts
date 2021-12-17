import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FilterProduct } from './product.dto';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  public async getProducts(input: FilterProduct, paginate = true) {
    const queryBuilder = this.productRepository.createQueryBuilder('pro');
    if (input.querySearch) {
      queryBuilder.where(`name like '%${input.querySearch || ''}%'`);
      queryBuilder.orWhere(`description like '%${input.querySearch || ''}%'`);
      queryBuilder.orWhere(`code like '%${input.querySearch || ''}%'`);
    }
    // validate ids 
    if (input.ids) queryBuilder.whereInIds(input.ids);
    // paginate
    if (paginate) return await this.productRepository.paginate(queryBuilder, input);
    // raw
    return await queryBuilder.getMany();
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
