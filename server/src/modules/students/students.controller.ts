import { Controller, Get, Post, Body, Query, UploadedFile, UseInterceptors, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateStudentDto } from './student.dto';
import { StudentEntity } from './students.entity';
import { StudentsService } from './students.service';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { ApiBody } from '@nestjs/swagger';
import { CustomValidation } from '../../common/pipes/custom-validation.pipe';
import { PaginateDto } from '../../common/dto/paginate.dto';
import { CreateImageDto, ValidateCreateImage } from './dtos/create-image.dto';
 
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

  @Post(':id/uploadImage')
  @ApiBody({ type: [ValidateCreateImage] })
  @UseInterceptors(FileInterceptor('file'))
  public async uploadImage(@Param('id') id: number, 
    @UploadedFile() file: Express.Multer.File) {
    return await this.studentsService.createImage(id, {
      name: file.originalname,
      size: file.size,
      buffer: file.buffer,
      mimeType: file.mimetype,
      principal: true
    } as CreateImageDto);
  }
}
