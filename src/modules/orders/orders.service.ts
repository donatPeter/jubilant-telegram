import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from '../database/repositories/orders/orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private readonly ordersRepository: OrdersRepository,
  ) {}

  /**
   * Returns every order
   */
  public getOrders() {
    return this.ordersRepository.find();
  }

  /**
   * Returns an order by id or throws an error if order is not found
   */
  public async getOrder(id: string) {
    try {
      return await this.ordersRepository.findOne(id);
    } catch {
      throw new NotFoundException();
    }
  }

  /**
   * Deletes an order by id or throws an error if order is not found
   */
  public async deleteOrder(id: string) {
    try {
      await this.ordersRepository.findOne(id);
      return this.ordersRepository.delete(id);
    } catch {
      throw new NotFoundException();
    }
  }
}
