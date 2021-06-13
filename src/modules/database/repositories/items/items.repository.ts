import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemsEntity } from './items.entity';

@Injectable()
export class ItemsRepository {
  constructor(
    @InjectRepository(ItemsEntity)
    private readonly repository: Repository<ItemsEntity>,
  ) {}
}
