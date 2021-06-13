import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from './repositories/orders/orders.entity';
import { OrdersRepositoryModule } from './repositories/orders/orders-repository.module';
import { ItemsRepositoryModule } from './repositories/items/items-repository.module';
import { ItemsEntity } from './repositories/items/items.entity';
import { CustomersRepositoryModule } from './repositories/customers/customers-repository.module';
import { CustomersEntity } from './repositories/customers/customers.entity';
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
      entities: [OrdersEntity, ItemsEntity, CustomersEntity, OrdersItemsEntity],
      synchronize: true,
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
