import { Body, Controller, Post } from '@nestjs/common';
import { CustomValidation } from 'src/common/pipes/custom-validation.pipe';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { CreatePaymentDto } from './domain/payment.dto';
import { PaymentEntity } from './domain/payment.entity';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post()
  public async store(@Body(new CustomValidation(CreatePaymentDto)) payload: PaymentEntity) {
    return await this.paymentsService.createPayment(payload);
  }

}
