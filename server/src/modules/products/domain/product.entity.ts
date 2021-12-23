import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class ProductEntity {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public description: string;

  @ApiProperty()
  @Column()
  public providerId: number;

  @ApiProperty()
  @Column()
  public campusId: number;

  @ApiProperty()
  @Column()
  public stock: number;

  @ApiProperty()
  @Column()
  public code: string;

  @ApiProperty()
  @Column({ comment: 'precio de compra' })
  public purchasePrice: number;

  @ApiProperty()
  @Column({ comment: 'precio de venta' })
  public salePrice: number;

  @ApiProperty()
  @Column({ default: true })
  public state: boolean = true;

  @CreateDateColumn({ name: 'created_at' })
  public created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updated_at: Date;

}