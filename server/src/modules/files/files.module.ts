import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileRepository } from './domain/file.repository';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileRepository])],
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
