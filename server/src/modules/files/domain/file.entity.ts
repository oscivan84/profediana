import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("files")
export class FileEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'fileable_type' })
  public fileableType: string;

  @Column({ name: 'fileable_id' })
  public fileableId: number;

  @Column()
  public name: string;

  @Column()
  public path: string;

  @Column()
  public extname: string

  @Column()
  public size: number;

  @Column({  name: 'mime_type' })
  public mimeType: string;

  @Column('boolean')
  public principal: boolean;

  @Column('boolean')
  public state: boolean;
  
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}