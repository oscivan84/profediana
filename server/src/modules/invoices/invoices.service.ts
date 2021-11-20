import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InvoiceEntity } from './invoice.entity';
import { InvoiceRepository } from './invoice.repository';

@Injectable()
export class InvoicesService {
  constructor(private invoiceRepository: InvoiceRepository) {}

  public async createInvoice(payload: InvoiceEntity) {
    try {
      const newInvoice = this.invoiceRepository.create(payload);
      return await this.invoiceRepository.save(newInvoice);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }

  public async findDebt(id: number, cancelled?: boolean | undefined): Promise<number> {
    try {
      return await this.invoiceRepository.findDebt(id, cancelled);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo obtener la deuda");
    }
  }

  public async findCountShare(id: number): Promise<number> {
    try {
      return await this.invoiceRepository.findCountShare(id);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo obtener el total letras de pago");
    }
  }
}
