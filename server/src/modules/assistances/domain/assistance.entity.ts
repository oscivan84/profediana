import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('assistances')
export class AssistanceEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public enrollmentId: number;

  @Column('date')
  public date: Date;

  @Column({ nullable: true })
  public observation: string;

  @Column('boolean')
  public attended: boolean;

  @Column('boolean', { default: true })
  public state: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}