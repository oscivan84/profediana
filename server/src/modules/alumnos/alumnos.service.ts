import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AlumnoRepository } from './alumno.reporitory';

@Injectable()
export class AlumnosService {
  constructor(private alumnoRepository: AlumnoRepository) {}

  public async getAlumnos(): Promise<any> {
    return await this.alumnoRepository.find();
  }

  public async createAlumno(payload: any): Promise<any> {
    try {
      const entity = this.alumnoRepository.create(payload);
      await this.alumnoRepository.save(entity);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }
}
