import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsEntity } from './repositories/items/items.entity';
import { OrdersItemsEntity } from './repositories/order_items/orders-items.entity';
import { OrdersEntity } from './repositories/orders/orders.entity';
import { CustomersEntity } from './repositories/customers/customers.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [ItemsEntity, OrdersItemsEntity, OrdersEntity, CustomersEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
