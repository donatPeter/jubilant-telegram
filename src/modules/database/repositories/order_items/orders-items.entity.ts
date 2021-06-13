import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { OrdersEntity } from '../orders/orders.entity';
import { ItemsEntity } from '../items/items.entity';

@Entity('orders_items')
export class OrdersItemsEntity {
  @OneToOne(() => OrdersEntity, { nullable: true, primary: true })
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order_id: string;

  @OneToOne(() => ItemsEntity, { nullable: true })
  @JoinColumn({ name: 'item_id', referencedColumnName: 'id' })
  item_id: unknown;
}
