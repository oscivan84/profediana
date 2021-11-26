import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { CreateCareerDto } from './career.dto';
import { CareerEntity } from './career.entity';
import { CareersService } from './careers.service';

@Controller('careers')
export class CareersController {
  constructor(private careersService: CareersService) {}

  @ApiBody({ type: [CareerEntity] })
  @Post()
  public async store(@Body(new JoiValidationPipe(CreateCareerDto)) payload) {
    return await this.careersService.createCareer(payload);
  }
}
