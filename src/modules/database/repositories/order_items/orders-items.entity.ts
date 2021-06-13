import { Column, Entity } from 'typeorm';

@Entity('orders_items')
export class OrdersItemsEntity {
  @Column('text')
  order_id: string;

  @Column('text')
  item_id: number;
}
