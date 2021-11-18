import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('usuarios')
export class UserEntity {

  @PrimaryGeneratedColumn({ name: 'idusuarios' })
  public id: number;

  @Column({ name: 'nombre' })
  @ApiProperty()
  public name: string;

  @Column({ name: 'apellido' })
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

  @Column({ name: 'idrol' })
  @ApiProperty()
  public roleId: number;

  @Column({ name: 'idempresa' })
  @ApiProperty()
  public empresaId: number;

  @Column({ name: 'sede_idsede' })
  @ApiProperty()
  public sedeId: number;

  @Column({ type: 'timestamp', name: 'create_time' })
  @ApiProperty()
  public createdAt: Date;

}