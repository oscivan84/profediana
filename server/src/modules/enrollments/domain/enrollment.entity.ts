import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('enrollments')
export class EnrollmentEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public scheduleId: number;

  @Column()
  public studentId: number;

  @Column()
  public promedio: number;

  @Column({ nullable: true })
  public observation: string;

  @Column('boolean', { default: true })
  public state: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedat: Date;
}