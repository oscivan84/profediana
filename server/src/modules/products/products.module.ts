import { Module } from '@nestjs/common';
import { ProductsService } from './application/products.service';
import { ProductsController } from './infrastructure/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './domain/product.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository])
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
