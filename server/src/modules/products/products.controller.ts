import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { CreateProductDto } from './product.dto';
import { ProductEntity } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiBody({ type: [ProductEntity] })
  @Post()
  public async store(@Body(new JoiValidationPipe(CreateProductDto)) payload: ProductEntity) {
    return this.productsService.createProduct(payload);
  }
}
