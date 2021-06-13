import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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

  public async getOrder(id: string) {
    try {
      return await this.ordersRepository.findOne(id);
    } catch {
      throw new NotFoundException();
    }
  }

  public async deleteOrder(id: string) {
    try {
      await this.ordersRepository.findOne(id);
      return this.ordersRepository.delete(id);
    } catch {
      throw new NotFoundException();
    }
  }
}
