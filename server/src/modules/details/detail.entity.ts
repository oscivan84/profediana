import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('details')
export class DetailEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column({ name: 'invoice_id' })
  public invoiceId: number;

  @ApiProperty()
  @Column({ name: 'detailable_type' })
  public detailableType: string;

  @ApiProperty()
  @Column({ name: 'detailable_id' })
  public detailableId: number;

  @ApiProperty()
  @Column()
  public price: number;

  @ApiProperty()
  @Column()
  public amount: number;

  @Column({ default: true })
  public state: boolean = true;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}