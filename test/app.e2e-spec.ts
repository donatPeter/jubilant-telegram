import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CustomerRequest } from '../src/types/customers.type';
import { CustomerEntity } from '../src/modules/database/repositories/customers/customer.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('customer', () => {
    it('/customers (GET)', () => {
      const payload: CustomerRequest = {
        email: 'test@test.com',
        family_name: 'fn',
        given_name: 'gn',
      };
      let customer: CustomerEntity;
      return request(app.getHttpServer())
        .post('/customer')
        .send(payload)
        .expect(201)
        .expect((res) => {
          customer = res.body;
          return res.body instanceof CustomerEntity;
        })
        .then(() => {
          request(app.getHttpServer())
            .get(`customers/${customer.id}`)
            .expect(200)
            .expect(customer);
        });
    });
  });
});
