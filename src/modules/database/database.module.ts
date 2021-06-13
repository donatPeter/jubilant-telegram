import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsEntity } from './repositories/items/items.entity';
import { OrdersItemsEntity } from './repositories/order_items/orders-items.entity';
import { OrdersEntity } from './repositories/orders/orders.entity';
import { CustomersEntity } from './repositories/customers/customers.entity';
import { OrdersRepository } from './repositories/orders/orders.repository';
import { ItemsRepository } from './repositories/items/items.repository';
import { CustomersRepository } from './repositories/customers/customers.repository';
import { OrdersItemsRepository } from './repositories/order_items/orders-items.repository';

const ordersRepositoryProvider: ClassProvider = {
  provide: 'ORDERS_REPOSITORY',
  useClass: OrdersRepository,
};

const customersRepositoryProvider: ClassProvider = {
  provide: 'CUSTOMERS_REPOSITORY',
  useClass: CustomersRepository,
};

const itemsRepositoryProvider: ClassProvider = {
  provide: 'ITEMS_REPOSITORY',
  useClass: ItemsRepository,
};

const ordersItemsRepositoryProvider: ClassProvider = {
  provide: 'ORDERS_ITEMS_REPOSITORY',
  useClass: OrdersItemsRepository,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [ItemsEntity, OrdersItemsEntity, OrdersEntity, CustomersEntity],
      synchronize: true,
    }),
  ],
  providers: [
    ordersRepositoryProvider,
    customersRepositoryProvider,
    itemsRepositoryProvider,
    ordersItemsRepositoryProvider,
  ],
})
export class DatabaseModule {}
