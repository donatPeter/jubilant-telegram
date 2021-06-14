import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersItemsEntity } from './orders-items.entity';
import { OrderEntity } from '../orders/order.entity';
import { ItemEntity } from '../items/item.entity';

@Injectable()
export class OrdersItemsRepository {
  constructor(
    @InjectRepository(OrdersItemsEntity)
    private readonly repository: Repository<OrdersItemsEntity>,
  ) {}

  public create(order: OrderEntity, item: ItemEntity) {
    return this.repository.create({ order, item });
  }

  public save(ordersItems: OrdersItemsEntity[]) {
    return this.repository.save(ordersItems);
  }
}
