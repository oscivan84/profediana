import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from '../application/dtos/product.dto';
import { ProductsService } from '../application/products.service';
import { ProductEntity } from '../domain/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiResponse({ type: [ProductEntity] })
  @Post()
  public async store(@Body() payload: CreateProductDto) {
    return this.productsService.createProduct(payload);
  }
}
