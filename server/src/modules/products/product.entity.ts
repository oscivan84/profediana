import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class ProductEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public description: string;

  @ApiProperty()
  @Column({ name: 'product_type_id' })
  public productTypeId: number;

  @ApiProperty()
  @Column()
  public stock: number;

  @ApiProperty()
  @Column()
  public code: string;

  @ApiProperty()
  @Column({ comment: 'precio de compra', name: 'purchase_price' })
  public purchasePrice: number;

  @ApiProperty()
  @Column({ comment: 'precio de venta', name: 'sale_price' })
  public salePrice: number;

  @Column({ default: true })
  public state: boolean = true;

  @CreateDateColumn({ name: 'created_at' })
  public created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updated_at: Date;

}