import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersEntity } from './orders.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly repository: Repository<OrdersEntity>,
  ) {}

  public find() {
    return this.repository.find();
  }
}
