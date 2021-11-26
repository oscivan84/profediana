import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { StudentRepository } from './student.reporitory';
import { StudentEntity } from './students.entity';

@Injectable()
export class StudentsService {
  constructor(private studentRepository: StudentRepository) {}

  public async getStudents(input: PaginateDto): Promise<any> {
    const students = this.studentRepository.createQueryBuilder('stu')
      .where(`stu.name like '%${input.querySearch || ''}%'`)
      .orWhere(`stu.lastname like '%${input.querySearch || ''}%'`)
      .orWhere(`stu.document_number like '%${input.querySearch || ''}%'`);
    return await this.studentRepository.paginate(students, input);
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
