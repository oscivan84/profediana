import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { StudentRepository } from './student.reporitory';
import { StudentEntity } from './students.entity';

@Injectable()
export class StudentsService {
  constructor(private studentRepository: StudentRepository) {}

  public async getStudents(): Promise<any> {
    return await this.studentRepository.find();
  }

  public async createStudent(payload: StudentEntity): Promise<StudentEntity> {
    try {
      const newStudent = this.studentRepository.create(payload);
      return await this.studentRepository.save(newStudent);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }
}
