import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { OrdersEntity } from '../orders/orders.entity';
import { ItemsEntity } from '../items/items.entity';

@Entity('orders_items')
export class OrdersItemsEntity {
  @ManyToOne(() => OrdersEntity, { nullable: true, primary: true })
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order_id: string;

  @ManyToOne(() => ItemsEntity, { nullable: true })
  @JoinColumn({ name: 'item_id', referencedColumnName: 'id' })
  item_id: unknown;
}
