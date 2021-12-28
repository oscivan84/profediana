import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssistancesService } from '../application/assistances.service';
import { CreateAssistanceDto } from '../application/dtos/create-assistance.dto';

@Controller('assistances')
@ApiTags('assistances')
export class AssistancesController {
  constructor(private assistancesService: AssistancesService) {}
  
  @Post()
  public store(@Body() createAssistanceDto: CreateAssistanceDto) {
    return this.assistancesService.createAssistance(createAssistanceDto);
  }
}