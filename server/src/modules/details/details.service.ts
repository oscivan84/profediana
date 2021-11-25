import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { SearchTypeDto } from './detail.dto';
import { DetailEntity } from './detail.entity';
import { DetailRepository } from './detail.repository';

@Injectable()
export class DetailsService {
  constructor(
    private productsService: ProductsService,
    private detailRepository: DetailRepository) {}

  public async createDetail(payload: DetailEntity): Promise<DetailEntity> {
    try {
      const newDetail = this.detailRepository.create(payload);
      return await this.detailRepository.save(newDetail);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }

  public async searchType(input: SearchTypeDto) {
    const typesProducts = await this.productsService.getProducts(input);
    return [
      { type: 'Product', data: typesProducts }
    ]
  }
}
