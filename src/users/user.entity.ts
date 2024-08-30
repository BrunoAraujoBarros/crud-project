import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceType } from 'src/enums/service-type.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ServiceType,
    default: ServiceType.COMPANY,
  })
  type: ServiceType;

}