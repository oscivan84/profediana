import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';
import { StudentEntity } from './students.entity';
import { StudentsService } from './students.service';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { ApiBody } from '@nestjs/swagger';
import { CustomValidation } from 'src/common/pipes/custom-validation.pipe';
import { PaginateDto } from 'src/common/dto/paginate.dto';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  public async index(@Query(new CustomValidation(PaginateDto)) payload) {
    return await this.studentsService.getStudents(payload);
  }

  @Post()
  @ApiBody({ type: [StudentEntity] })
  public async store(@Body(new JoiValidationPipe(CreateStudentDto)) body) {
    return await this.studentsService.createStudent(body);
  }

}
