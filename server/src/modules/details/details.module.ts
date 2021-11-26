import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailRepository } from './detail.repository';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DetailRepository]),
    ProductsModule,
  ],
  providers: [DetailsService],
  controllers: [DetailsController]
})
export class DetailsModule {}
