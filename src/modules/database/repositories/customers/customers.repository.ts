import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomersRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly repository: Repository<CustomerEntity>,
  ) {}

  public find() {
    return this.repository.find();
  }

  public async findOne(id: string) {
    try {
      return await this.repository.findOneOrFail({ where: { id } });
    } catch {
      throw new NotFoundException();
    }
  }

  public delete(id: string) {
    return this.repository.delete({ id });
  }

  public save(email: string, given_name: string, family_name: string) {
    return this.repository.save<DeepPartial<CustomerEntity>>({
      email,
      given_name,
      family_name,
    });
  }

  public update(
    id: string,
    email: string,
    given_name: string,
    family_name: string,
  ) {
    return this.repository.save<DeepPartial<CustomerEntity>>({
      id,
      email,
      given_name,
      family_name,
    });
  }
}
