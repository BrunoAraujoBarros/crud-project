import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceType } from 'src/enums/service-type.enum';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  email: string;

  @Column('int')
  senha: number;

  @Column({
    type: 'enum',
    enum: ServiceType,
    default: ServiceType.COMPANY,
  })
  type: ServiceType;

}