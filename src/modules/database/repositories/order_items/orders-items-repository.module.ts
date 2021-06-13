import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersItemsRepository } from './orders-items.repository';
import { OrdersItemsEntity } from './orders-items.entity';

const ordersItemsRepositoryProvider: ClassProvider = {
  provide: 'ORDERS_ITEMS_REPOSITORY',
  useClass: OrdersItemsRepository,
};

@Module({
  controllers: [],
  providers: [ordersItemsRepositoryProvider],
  imports: [TypeOrmModule.forFeature([OrdersItemsEntity])],
  exports: [TypeOrmModule, ordersItemsRepositoryProvider],
})
export class OrdersItemsRepositoryModule {}
