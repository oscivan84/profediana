import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DetailEntity } from './detail.entity';
import { DetailsService } from './details.service';
import { CreateDetailDto, SearchTypeDto } from './detail.dto';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { ApiBody } from '@nestjs/swagger';
import { CustomValidation } from 'src/common/pipes/custom-validation.pipe';

@Controller('details')
export class DetailsController {
  constructor(private detailsService: DetailsService) {}

  @ApiBody({ type: [DetailEntity] })
  @Post()
  public async store(@Body(new JoiValidationPipe(CreateDetailDto)) payload: DetailEntity) {
    return await this.detailsService.createDetail(payload);
  }

  @Get('searchType')
  public async searchType(@Query(new CustomValidation(SearchTypeDto))input) {
    return await this.detailsService.searchType(input);
  }
}
