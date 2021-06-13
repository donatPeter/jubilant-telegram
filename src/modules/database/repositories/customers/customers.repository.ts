import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersEntity } from './customers.entity';

@Injectable()
export class CustomersRepository {
  constructor(
    @InjectRepository(CustomersEntity)
    private readonly repository: Repository<CustomersEntity>,
  ) {}
}
