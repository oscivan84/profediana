import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentRepository } from './payment.repository';
import { InvoicesModule } from '../invoices/invoices.module';
import { PaymentSubscriber } from './payment.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentRepository]),
    InvoicesModule,
  ],
  providers: [PaymentsService, PaymentSubscriber],
  controllers: [PaymentsController]
})
export class PaymentsModule {}
