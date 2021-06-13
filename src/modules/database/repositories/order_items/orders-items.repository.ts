import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersItemsEntity } from './orders-items.entity';

@Injectable()
export class OrdersItemsRepository {
  constructor(
    @InjectRepository(OrdersItemsEntity)
    private readonly repository: Repository<OrdersItemsEntity>,
  ) {}
}
