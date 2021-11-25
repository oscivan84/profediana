import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('campuses')
export class CampusEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string

  @Column()
  public description: string;

  @Column({ name: 'company_id' })
  public companyId: number;

  @Column({ name: 'city_id' })
  public cityId: number;

  @Column({ default: true })
  public state: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}