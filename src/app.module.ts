import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [DatabaseModule, OrdersModule],
})
export class AppModule {}
