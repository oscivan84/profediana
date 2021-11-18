import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('alumno')
export class AlumnoEntity {

  @PrimaryGeneratedColumn()
  public idalumno: number;

  @Column()
  @ApiProperty()
  public nombre: string;

  @Column()
  @ApiProperty()
  public apellido: string;

  @Column()
  @ApiProperty()
  public numerodocumento: string;

  @Column()
  @ApiProperty()
  public direccion: string;

  @Column()
  public barrio: string;

  @Column()
  @ApiProperty()
  public telefonofijo: string;

  @Column()
  @ApiProperty()
  public telefonomovil: string;

  @Column()
  public correoelectronico: string;

  @Column()
  @ApiProperty()
  public contacto: string;

  @Column({ default: false })
  public pagos: boolean = false;

  @Column()
  @ApiProperty()
  public afiliacioneps_idafiliacioneps: number;

  @Column()
  @ApiProperty()
  public nivelacademico_idnivelacademico: number;

  @Column()
  @ApiProperty()
  public documento_iddocumento: number;

  @Column()
  @ApiProperty()
  public ciudad_idciudad: number;

  @Column()
  @ApiProperty()
  public idestadoalumno: number;

  @Column()
  @ApiProperty()
  public idestadocivil: number;

  @Column()
  @ApiProperty()
  public id_sede: number;

}
