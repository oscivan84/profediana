import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailRepository } from './detail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DetailRepository])],
  providers: [DetailsService],
  controllers: [DetailsController]
})
export class DetailsModule {}
