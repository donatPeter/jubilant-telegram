import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CustomersModule } from './modules/customers/customers.module';
import { ItemsModule } from './modules/items/items.module';

@Module({
  imports: [DatabaseModule, OrdersModule, CustomersModule, ItemsModule],
})
export class AppModule {}
