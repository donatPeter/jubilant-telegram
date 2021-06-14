import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  email: string;

  @Column('text')
  given_name: string;

  @Column('text')
  family_name: string;
}
