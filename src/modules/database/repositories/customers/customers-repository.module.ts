import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersEntity } from './customers.entity';
import { CustomersRepository } from './customers.repository';

const customersRepositoryProvider: ClassProvider = {
  provide: 'CUSTOMERS_REPOSITORY',
  useClass: CustomersRepository,
};

@Module({
  controllers: [],
  providers: [customersRepositoryProvider],
  imports: [TypeOrmModule.forFeature([CustomersEntity])],
  exports: [TypeOrmModule, customersRepositoryProvider],
})
export class CustomersRepositoryModule {}
