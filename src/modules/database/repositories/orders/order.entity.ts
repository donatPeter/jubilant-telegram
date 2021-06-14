import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerEntity } from '../customers/customer.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: CustomerEntity;

  @CreateDateColumn('date')
  date: string;
}
