import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomersEntity } from '../customers/customers.entity';

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => CustomersEntity)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: CustomersEntity;

  @Column('text')
  date: string;
}
