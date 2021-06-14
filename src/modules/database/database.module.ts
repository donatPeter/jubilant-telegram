import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './repositories/orders/order.entity';
import { OrdersRepositoryModule } from './repositories/orders/orders-repository.module';
import { ItemsRepositoryModule } from './repositories/items/items-repository.module';
import { ItemEntity } from './repositories/items/item.entity';
import { CustomersRepositoryModule } from './repositories/customers/customers-repository.module';
import { CustomerEntity } from './repositories/customers/customer.entity';
import { OrdersItemsRepositoryModule } from './repositories/order_items/orders-items-repository.module';
import { OrdersItemsEntity } from './repositories/order_items/orders-items.entity';

@Module({
  imports: [
    OrdersRepositoryModule,
    ItemsRepositoryModule,
    CustomersRepositoryModule,
    OrdersItemsRepositoryModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [OrderEntity, ItemEntity, CustomerEntity, OrdersItemsEntity],
      synchronize: false,
    }),
  ],
  providers: [],
  exports: [
    TypeOrmModule,
    OrdersRepositoryModule,
    ItemsRepositoryModule,
    CustomersRepositoryModule,
    OrdersItemsRepositoryModule,
  ],
})
export class DatabaseModule {}
