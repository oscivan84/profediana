import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { CreateInvoiceDto } from './invoice.dto';
import { InvoiceEntity } from './invoice.entity';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}
  
  @ApiBody({ type: [InvoiceEntity] })
  @Post()
  public async store(@Body(new JoiValidationPipe(CreateInvoiceDto)) payload: InvoiceEntity) {
    return await this.invoicesService.createInvoice(payload);
  }

  @Get(':id/debt')
  public async debt(@Param('id') id: number) {
    const debt = await this.invoicesService.findDebt(id, true);
    return { debt };
  }
}
