import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  public async createProduct(payload: ProductEntity): Promise<ProductEntity> {
    try {
      const newProduct = this.productRepository.create(payload)
      return await this.productRepository.save(newProduct);
    } catch (error) {
      throw new InternalServerErrorException("No se puede guardar los datos");
    }
  }
}
