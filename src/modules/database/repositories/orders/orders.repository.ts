import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CustomerEntity } from '../customers/customer.entity';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
  ) {}

  public find() {
    return this.repository.find({ relations: ['customer'] });
  }

  public findOne(id: string) {
    return this.repository.findOneOrFail({ where: { id } });
  }

  public delete(id: string) {
    return this.repository.delete({ id });
  }

  public save(customer: CustomerEntity) {
    return this.repository.save<DeepPartial<OrderEntity>>({
      customer,
      date: this.getDateString(),
    });
  }

  private getDateString = () =>
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000)
      .toISOString()
      .split('T')[0];
}
