import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsEntity } from './items.entity';
import { ItemsRepository } from './items.repository';

const itemsRepositoryProvider: ClassProvider = {
  provide: 'ITEMS_REPOSITORY',
  useClass: ItemsRepository,
};

@Module({
  controllers: [],
  providers: [itemsRepositoryProvider],
  imports: [TypeOrmModule.forFeature([ItemsEntity])],
  exports: [TypeOrmModule, itemsRepositoryProvider],
})
export class ItemsRepositoryModule {}
