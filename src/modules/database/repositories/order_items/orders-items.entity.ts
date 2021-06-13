import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders_items')
export class OrdersItemsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  order_id: string;

  @Column('text')
  item_id: number;
}
