import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from '../database/repositories/orders/orders.repository';
import { Transaction } from 'typeorm';
import { ItemsRepository } from '../database/repositories/items/items.repository';
import { OrdersItemsRepository } from '../database/repositories/order_items/orders-items.repository';
import { CustomersRepository } from '../database/repositories/customers/customers.repository';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private readonly ordersRepository: OrdersRepository,
    @Inject('ITEMS_REPOSITORY')
    private readonly itemsRepository: ItemsRepository,
    @Inject('ORDERS_ITEMS_REPOSITORY')
    private readonly ordersItemsRepository: OrdersItemsRepository,
    @Inject('CUSTOMERS_REPOSITORY')
    private readonly customersRepository: CustomersRepository,
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

  /**
   * Creates an order with given items
   * @param customerId
   * @param itemIds
   */
  @Transaction()
  public async createOrder(customerId: string, itemIds: string[]) {
    // check if every item and customer id is valid
    const itemsPromises = itemIds.map((itemId) =>
      this.itemsRepository.findOneOrFail(itemId),
    );
    const [customer, items] = await Promise.all([
      this.customersRepository.findOne(customerId),
      Promise.all(itemsPromises),
    ]);
    // save the order entity
    const order = await this.ordersRepository.save(customer);
    // save the ordersItems entities
    const ordersItems = items.map((item) =>
      this.ordersItemsRepository.create(order, item),
    );
    return this.ordersItemsRepository.save(ordersItems);
  }
}
