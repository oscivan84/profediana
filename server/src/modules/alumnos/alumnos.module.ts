import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoRepository } from './alumno.reporitory';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AlumnoRepository])],
  providers: [AlumnosService],
  controllers: [AlumnosController],
  exports: [AlumnosService],
})
export class AlumnosModule {}
