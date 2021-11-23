import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('students')
export class StudentEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @ApiProperty()
  public name: string;

  @Column()
  @ApiProperty()
  public lastname: string;

  @Column({ name: 'document_number' })
  @ApiProperty()
  public documentNumber: string;

  @Column({ name: 'date_of_birth' })
  @ApiProperty()
  public dateOfBirth: Date;

  @Column()
  @ApiProperty()
  public address: string;

  @Column()
  public neighborhood: string;

  @Column()
  @ApiProperty()
  public landline: string;

  @Column()
  @ApiProperty()
  public phone: string;

  @Column()
  public email: string;

  @Column()
  @ApiProperty()
  public contact: string;

  @Column()
  @ApiProperty()
  public eps: string;

  @Column({ name: 'affiliation_id' })
  @ApiProperty()
  public affiliationId: number;

  @Column({ name: 'degree_id' })
  @ApiProperty()
  public degreeId: number;

  @Column({ name: 'document_type_id' })
  @ApiProperty()
  public documentTypeId: number;

  @Column({ name: 'city_id' })
  @ApiProperty()
  public cityId: number;

  @Column({ name: 'status_id' })
  @ApiProperty()
  public statusId: number;

  @Column({ name: 'marital_status_id' })
  @ApiProperty()
  public maritalStatusId: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt;

} 
