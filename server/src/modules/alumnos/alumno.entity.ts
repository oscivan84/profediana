import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alumno')
export class AlumnoEntity {

  @PrimaryGeneratedColumn()
  public idalumno: number;

  @Column()
  public nombre: string;

  @Column()
  public apellido: string;

  @Column()
  public numerodocumento: string;

  @Column()
  public direccion: string;

  @Column()
  public barrio: string;

  @Column()
  public telefonofijo: string;

  @Column()
  public telefonomovil: string;

  @Column()
  public correoelectronico: string;

  @Column()
  public contacto: string;

  @Column({ default: false })
  public pagos: boolean = false;

  @Column()
  public afiliacioneps_idafiliacioneps: number;

  @Column()
  public nivelacademico_idnivelacademico: number;

  @Column()
  public documento_iddocumento: number;

  @Column()
  public ciudad_idciudad: number;

  @Column()
  public idestadoalumno: number;

  @Column()
  public idestadocivil: number;

  @Column()
  public id_sede: number;

}
