import { Body, Controller, Get, Post, Put, Query, Res } from '@nestjs/common';
import { DetailEntity } from './detail.entity';
import { DetailsService } from './details.service';
import { CreateDetailDto, SearchTypeDto } from './detail.dto';
import { ApiBody } from '@nestjs/swagger';
import { CustomValidation } from '../../common/pipes/custom-validation.pipe';
import { Response } from 'express';
import { ParseErrorResponse } from '../../common/utils/parse-error-response';

@Controller('details')
export class DetailsController {
  constructor(private detailsService: DetailsService) {}

  @ApiBody({ type: [DetailEntity] })
  @Post()
  public async store(@Body(new CustomValidation(CreateDetailDto)) payload: DetailEntity) {
    return await this.detailsService.createDetail(payload);
  }

  @ApiBody({ type: [DetailEntity] })
  @Put()
  public async storeMany(
    @Res() response: Response,
    @Body(new CustomValidation(CreateDetailDto, true)) payload: DetailEntity[]) {
    const result = this.detailsService.createDetailMany(payload);
    return result.subscribe({
      next: (details) => response.json(details),
      error: (err) => new ParseErrorResponse(err).response(response) 
    })
  }

  @Get('searchType')
  public async searchType(@Query(new CustomValidation(SearchTypeDto)) input) {
    return await this.detailsService.searchType(input);
  }
}
