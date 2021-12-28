import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('schedules')
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public curricularId: number;

  @Column()
  public cycleId: number;

  @Column()
  public teacherId: number;

  @Column({ length: 40 })
  public groupName: string;

  @Column()
  public groupLimit: number;

  @Column('boolean', { default: true })
  public isVisibled: boolean;

  @Column('date')
  public dateStart: Date;

  @Column('date')
  public dateOver: Date;

  @Column('boolean', { default: true })
  public state: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}