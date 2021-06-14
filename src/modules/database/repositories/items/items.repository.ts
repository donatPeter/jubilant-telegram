import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from './item.entity';

@Injectable()
export class ItemsRepository {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly repository: Repository<ItemEntity>,
  ) {}

  public async findOneOrFail(id: string) {
    try {
      return await this.repository.findOneOrFail(id);
    } catch {
      throw new NotFoundException();
    }
  }
}
