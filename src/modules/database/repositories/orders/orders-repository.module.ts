import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { OrdersRepository } from './orders.repository';

const ordersRepositoryProvider: ClassProvider = {
  provide: 'ORDERS_REPOSITORY',
  useClass: OrdersRepository,
};

@Module({
  controllers: [],
  providers: [ordersRepositoryProvider],
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  exports: [TypeOrmModule, ordersRepositoryProvider],
})
export class OrdersRepositoryModule {}
