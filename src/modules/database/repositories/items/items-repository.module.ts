import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { ItemsRepository } from './items.repository';

const itemsRepositoryProvider: ClassProvider = {
  provide: 'ITEMS_REPOSITORY',
  useClass: ItemsRepository,
};

@Module({
  controllers: [],
  providers: [itemsRepositoryProvider],
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  exports: [TypeOrmModule, itemsRepositoryProvider],
})
export class ItemsRepositoryModule {}
