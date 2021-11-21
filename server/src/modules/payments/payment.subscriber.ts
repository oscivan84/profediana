import { } from '@nestjs/common';
import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { InvoicesService } from '../invoices/invoices.service';
import { PaymentEntity } from './payment.entity';

@EventSubscriber()
export class PaymentSubscriber implements EntitySubscriberInterface<PaymentEntity> {
  constructor(
    connection: Connection, 
    private invoicesService: InvoicesService
  ) {
    connection.subscribers.push(this);
  }

  public async beforeInsert(event: InsertEvent<PaymentEntity>): Promise<void> {
    const payment = event.entity;
    const share: number = (await this.invoicesService.findCountShare(payment.invoiceId)) + 1;
    payment.cancelled = `${payment.cancelled}` == 'true';
    payment.share = share;
  }

  public async afterInsert(event: InsertEvent<PaymentEntity>): Promise<void> {
    const payment = event.entity;
    this.invoicesService.updatedCancelled(payment.invoiceId);
  }
};