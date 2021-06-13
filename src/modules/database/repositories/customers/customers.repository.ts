import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CustomersEntity } from './customers.entity';

@Injectable()
export class CustomersRepository {
  constructor(
    @InjectRepository(CustomersEntity)
    private readonly repository: Repository<CustomersEntity>,
  ) {}

  public find() {
    return this.repository.find();
  }

  public async findOne(id: string) {
    return this.repository.findOneOrFail({ where: { id } });
  }

  public delete(id: string) {
    return this.repository.delete({ id });
  }

  public save(email: string, given_name: string, family_name: string) {
    return this.repository.save<DeepPartial<CustomersEntity>>({
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
    return this.repository.save<DeepPartial<CustomersEntity>>({
      id,
      email,
      given_name,
      family_name,
    });
  }
}
