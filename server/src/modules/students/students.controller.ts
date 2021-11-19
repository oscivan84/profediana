import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';
import { StudentEntity } from './students.entity';
import { StudentsService } from './students.service';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { ApiBody } from '@nestjs/swagger';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  public async index() {
    return await this.studentsService.getStudents();
  }

  @Post()
  @ApiBody({ type: [StudentEntity] })
  public async store(@Body(new JoiValidationPipe(CreateStudentDto)) body) {
    return await this.studentsService.createStudent(body);
  }

}
