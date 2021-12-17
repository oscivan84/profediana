import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { PaginateDto } from 'src/common/dto/paginate.dto';
import { CustomValidation } from '../../common/pipes/custom-validation.pipe';
import { CreateInvoiceDto, SearchReceiverDto } from './domain/invoice.dto';
import { InvoiceEntity } from './domain/invoice.entity';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}
  
  @ApiBody({ type: [InvoiceEntity] })
  @Post()
  public async store(@Body(new CustomValidation(CreateInvoiceDto)) payload: InvoiceEntity) {
    return await this.invoicesService.createInvoice(payload);
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    return await this.invoicesService.findInvoice(id);
  }

  @Get(':id/debt')
  public async debt(@Param('id') id: number) {
    return await this.invoicesService.findDebt(id, true);
  }

  @Get('search/receiver')
  public async searchReceiver(@Query(new CustomValidation(SearchReceiverDto)) query) {
    return await this.invoicesService.searchReceiver(query);
  }

  @Get(':id/details')
  public async details(@Param('id') id: number, @Query() query: PaginateDto) {
    return await this.invoicesService.details(id, query);
  }
}
