import { Inject, Injectable } from '@nestjs/common';
import { OrdersRepository } from '../database/repositories/orders/orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private readonly ordersRepository: OrdersRepository,
  ) {}

  public getOrders() {
    return this.ordersRepository.find();
  }
}
