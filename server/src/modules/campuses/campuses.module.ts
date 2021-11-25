import { Module } from '@nestjs/common';
import { CampusesService } from './campuses.service';
import { CampusesController } from './campuses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampusRepository } from './campus.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CampusRepository])],
  providers: [CampusesService],
  controllers: [CampusesController],
  exports: [CampusesService],
})
export class CampusesModule {}
