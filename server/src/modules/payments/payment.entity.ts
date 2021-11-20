import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column({ name: 'invoice_id' })
  public invoiceId: number;

  @ApiProperty()
  @Column({ name: 'payment_service_id' })
  public paymentServiceId: number;

  @ApiProperty()
  @Column()
  public price: number;

  @ApiProperty()
  @Column()
  public datetime: Date;

  @ApiProperty()
  @Column({ default: 0 })
  public share: number = 0;

  @Column({ default: true })
  public cancelled: boolean = true;

  @Column({ default: true })
  public state: boolean = true;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date; 
}