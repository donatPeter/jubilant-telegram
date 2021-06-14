import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items')
export class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('real')
  cost: number;

  @Column('text')
  supplier: string;
}
