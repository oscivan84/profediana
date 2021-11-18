import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAlumnoDto } from './alumno.dto';
import { AlumnoEntity } from './alumno.entity';
import { AlumnosService } from './alumnos.service';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { ApiBody } from '@nestjs/swagger';

@Controller('alumnos')
export class AlumnosController {
  constructor(private alumnosService: AlumnosService) {}

  @Get()
  public index() {
    return this.alumnosService.getAlumnos();
  }

  @Post()
  @ApiBody({ type: [AlumnoEntity] })
  public store(@Body(new JoiValidationPipe(CreateAlumnoDto)) body) {
    return this.alumnosService.createAlumno(body);
  }

}
