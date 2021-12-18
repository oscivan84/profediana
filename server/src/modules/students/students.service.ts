import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { FilesService } from '../files/files.service';
import { CreateImageDto } from './dtos/create-image.dto';
import { StudentRepository } from './student.reporitory';
import { StudentEntity } from './students.entity';

@Injectable()
export class StudentsService {
  constructor(
    private filesService: FilesService,
    private studentRepository: StudentRepository) {}

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

  public async findStudent(id: number) {
    return this.studentRepository.findOneOrFail(id);
  }

  public async createImage(id: number, fileMeta: CreateImageDto) {
    const student = await this.findStudent(id);
    fileMeta.fileableId = student.id;
    return await this.filesService.createFile(
      CreateImageDto.generator(fileMeta)
    );
  } 
}
