import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from './orders.entity';
import { OrdersRepository } from './orders.repository';

const ordersRepositoryProvider: ClassProvider = {
  provide: 'ORDERS_REPOSITORY',
  useClass: OrdersRepository,
};

@Module({
  controllers: [],
  providers: [ordersRepositoryProvider],
  imports: [TypeOrmModule.forFeature([OrdersEntity])],
  exports: [TypeOrmModule, ordersRepositoryProvider],
})
export class OrdersRepositoryModule {}
