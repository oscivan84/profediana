import { IsBoolean, IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  public invoiceId: number;
  public paymentServiceId: number;

  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @IsNotEmpty()
  @IsDate()
  public datetime: Date;

  @IsNotEmpty()
  @IsBoolean()
  public cancelled: boolean
}