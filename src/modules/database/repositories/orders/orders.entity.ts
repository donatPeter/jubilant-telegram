import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomersEntity } from '../customers/customers.entity';

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => CustomersEntity)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: CustomersEntity;

  @CreateDateColumn('date')
  date: string;
}
