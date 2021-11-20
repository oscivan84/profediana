import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { DetailEntity } from '../details/detail.entity';

@Entity('invoices')
export class InvoiceEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column({ name: 'transmitter_type' })
  public transmitterType: string;

  @ApiProperty()
  @Column({ name: 'transmitter_id' })
  public transmitterId: number;

  @ApiProperty()
  @Column()
  public description: string;

  @ApiProperty()
  @Column()
  public date: Date;

  @ApiProperty()
  @Column({ name: 'receiver_type' })
  public receiverType: string;

  @ApiProperty()
  @Column({ name: 'receiver_id' })
  public receiverId: number;

  @Column({ default: false })
  public cancelled: boolean = false;

  @Column({ default: true })
  public state: boolean = true;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @OneToMany(() => DetailEntity, detail => detail.invoice)
  public details: DetailEntity[];
}