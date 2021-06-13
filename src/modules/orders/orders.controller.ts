import { Controller, Delete, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { GetOrderRequest } from '../../types/orders.type';

@Controller()
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get('orders')
  public getOrders() {
    return this.service.getOrders();
  }

  @Get('orders/:id')
  public getOrder(@Param() { id }: GetOrderRequest) {
    return this.service.getOrder(id);
  }

  @Delete('orders/:id')
  public deleteOrder(@Param() { id }: GetOrderRequest) {
    return this.service.deleteOrder(id);
  }
}
