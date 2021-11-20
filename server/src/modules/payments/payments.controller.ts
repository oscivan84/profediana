import { Body, Controller, Post } from '@nestjs/common';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';
import { CreatePaymentDto } from './payment.dto';
import { PaymentEntity } from './payment.entity';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post()
  public async store(@Body(new JoiValidationPipe(CreatePaymentDto)) payload: PaymentEntity) {
    return await this.paymentsService.createPayment(payload);
  }

}
