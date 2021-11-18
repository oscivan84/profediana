import { HttpException } from '@nestjs/common';
import * as Joi from 'joi'

type paymentItem = {
  [key: string]: string[]
}

export class PaymentRequiredException extends HttpException {

  errors: paymentItem[] = []

  code: "PAYMENT_REQUIRED"

  constructor(detailPayments: Joi.ValidationErrorItem[]) {
    super('Payment Required', 401);
    this.formatter(detailPayments);
  }

  getStatus(): number {
    return 402;
  }

  formatter(details: Joi.ValidationErrorItem[]) {
    details.forEach(detail => {
      let key = detail.context.key;
      let value = [detail.message];
      this.errors.push({ [key]: value });
    })
  }
}
