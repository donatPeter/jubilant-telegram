import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { OrderEntity } from '../orders/order.entity';
import { ItemEntity } from '../items/item.entity';

@Entity('orders_items')
export class OrdersItemsEntity {
  @ManyToOne(() => OrderEntity, { nullable: true, primary: true })
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: OrderEntity;

  @ManyToOne(() => ItemEntity, { nullable: true })
  @JoinColumn({ name: 'item_id', referencedColumnName: 'id' })
  item: ItemEntity;
}
