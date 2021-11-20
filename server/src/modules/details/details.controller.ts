import { Body, Controller, Post } from '@nestjs/common';
import { DetailEntity } from './detail.entity';
import { DetailsService } from './details.service';
import { CreateDetailDto } from './detail.dto';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { ApiBody } from '@nestjs/swagger';

@Controller('details')
export class DetailsController {
  constructor(private detailsService: DetailsService) {}

  @ApiBody({ type: [DetailEntity] })
  @Post()
  public async store(@Body(new JoiValidationPipe(CreateDetailDto)) payload: DetailEntity) {
    return await this.detailsService.createDetail(payload);
  }
}
