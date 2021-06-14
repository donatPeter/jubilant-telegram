import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { CustomersRepository } from './customers.repository';

const customersRepositoryProvider: ClassProvider = {
  provide: 'CUSTOMERS_REPOSITORY',
  useClass: CustomersRepository,
};

@Module({
  controllers: [],
  providers: [customersRepositoryProvider],
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  exports: [TypeOrmModule, customersRepositoryProvider],
})
export class CustomersRepositoryModule {}
