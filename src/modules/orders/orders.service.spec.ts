import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { Connection } from 'typeorm';

describe('OrdersService', () => {
  let service: OrdersService;
  let ordersRepository;
  let itemsRepository;
  let ordersItemsRepository;
  let customersRepository;
  const mockConnection = () => ({
    transaction: jest.fn(),
  });

  beforeEach(async () => {
    ordersRepository = {
      provide: 'ORDERS_REPOSITORY',
      useValue: {
        find: jest.fn<any, []>(() => []),
      },
    };
    itemsRepository = {
      provide: 'ITEMS_REPOSITORY',
      useValue: {
        findOneOrFail: jest.fn<any, []>(() => []),
      },
    };
    ordersItemsRepository = {
      provide: 'ORDERS_ITEMS_REPOSITORY',
      useValue: {
        create: jest.fn<any, []>(() => []),
      },
    };
    customersRepository = {
      provide: 'CUSTOMERS_REPOSITORY',
      useValue: {
        find: jest.fn<any, []>(() => []),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: Connection,
          useFactory: mockConnection,
        },
        ordersRepository,
        itemsRepository,
        ordersItemsRepository,
        customersRepository,
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
