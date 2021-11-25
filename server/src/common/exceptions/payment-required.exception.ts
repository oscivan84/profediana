import { HttpException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import * as Joi from 'joi'

type paymentItem = {
  [key: string]: string[]
}

export class PaymentRequiredJoiException extends HttpException {

  errors: paymentItem[] = []

  code: "PAYMENT_REQUIRED"

  constructor(detailPayments: Joi.ValidationErrorItem[]) {
    super('Payment Required', 402);
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


export class PaymentRequiredException extends HttpException {

  errors: paymentItem[] = []

  constructor(errors: ValidationError[]) {
    super('Payment Required', 402);
    super.name = "ERR_PAYMENT_REQUIRED";
    this.formatter(errors);
  }

  getStatus(): number {
    return 402;
  }

  formatter(errors: ValidationError[]) {
    errors.forEach(error => {
      const key = error.property;
      const value = Object.values(error.constraints);
      this.errors.push({ [key]: value });
    })
  }
}