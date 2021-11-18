import { Controller, Get, Post, UseFilters, Body } from '@nestjs/common';
import { AlumnosPipe, CreateAlumnoDto } from './alumnos.pipe';
import { AlumnosService } from './alumnos.service';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller('alumnos')
export class AlumnosController {
  constructor(private alumnosService: AlumnosService) {}

  @Get()
  public index() {
    return this.alumnosService.getAlumnos();
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  public store(@Body(new AlumnosPipe(CreateAlumnoDto)) body) {
    return this.alumnosService.createAlumno(body);
  }

}
