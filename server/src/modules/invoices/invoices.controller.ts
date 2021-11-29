import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CustomValidation } from '../../common/pipes/custom-validation.pipe';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
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

  @Get(':id/debt')
  public async debt(@Param('id') id: number) {
    return await this.invoicesService.findDebt(id, true);
  }

  @Get('searchReceiver')
  public async searchReceiver(@Query(new CustomValidation(SearchReceiverDto)) query) {
    return this.invoicesService.searchReceiver(query);
  }
}
