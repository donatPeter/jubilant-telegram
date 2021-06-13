import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get('orders')
  public getOrders() {
    return this.service.getOrders();
  }
}
