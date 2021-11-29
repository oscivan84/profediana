import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InvoicesService } from '../invoices/invoices.service';
import { PaymentEntity } from './domain/payment.entity';
import { PaymentRepository } from './domain/payment.repository';

@Injectable()
export class PaymentsService {
  constructor(
    private invoicesService: InvoicesService,
    private paymentRepository: PaymentRepository
  ) {}

  public async createPayment(payload: PaymentEntity) {
    try {
      // obtener deuda
      const debt = await this.invoicesService.findDebt(payload.invoiceId);
      const total: number = debt - payload.price;
      if (total < 0) throw new InternalServerErrorException(`La deuda total es: ${debt}`);
      // guardar el pago
      const newPayment = this.paymentRepository.create(payload);
      return await this.paymentRepository.save(newPayment);
    } catch (error) {
      throw new InternalServerErrorException(error?.message);
    }
  }
}
