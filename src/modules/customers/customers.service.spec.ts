import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;
  let customersRepository;

  beforeEach(async () => {
    customersRepository = {
      provide: 'CUSTOMERS_REPOSITORY',
      useValue: {
        find: jest.fn<any, []>(() => []),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService, customersRepository],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
