import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class UserEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @ApiProperty()
  public name: string;

  @Column()
  @ApiProperty()
  public lastname: string;

  @Column()
  @ApiProperty()
  public username: string;

  @Column()
  @ApiProperty()
  public email: string;

  @Column()
  @ApiProperty()
  public password: string;

  @Column({ name: 'role_id' })
  @ApiProperty()
  public roleId: number;

  @Column({ name: 'company_id' })
  @ApiProperty()
  public companyId: number;

  @Column({ name: 'sede_id' })
  @ApiProperty()
  public sedeId: number;

  @Column({ default: true })
  public state: boolean = true;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

}