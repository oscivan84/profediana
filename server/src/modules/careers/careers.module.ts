import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareerRepository } from './career.repository';
import { CareersController } from './careers.controller';
import { CareersService } from './careers.service';

@Module({
  imports: [TypeOrmModule.forFeature([CareerRepository])],
  controllers: [CareersController],
  providers: [CareersService]
})
export class CareersModule {}
