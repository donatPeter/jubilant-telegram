import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CustomersRepository } from '../database/repositories/customers/customers.repository';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private readonly customersRepository: CustomersRepository,
  ) {}

  /**
   * Returns every customers
   */
  public getCustomers() {
    return this.customersRepository.find();
  }

  /**
   * Returns a customer by id or throws an error if customer is not found
   */
  public async getCustomer(id: string) {
    try {
      return await this.customersRepository.findOne(id);
    } catch {
      throw new NotFoundException();
    }
  }

  /**
   * Deletes a customer by id or throws an error if customer is not found
   */
  public async deleteCustomer(id: string) {
    try {
      await this.customersRepository.findOne(id);
      return this.customersRepository.delete(id);
    } catch {
      throw new NotFoundException();
    }
  }

  /**
   * Creates a new customer
   */
  public addCustomer(email: string, given_name: string, family_name: string) {
    return this.customersRepository.save(email, given_name, family_name);
  }

  /**
   * Modify an existing customer or throws an error is customer is not found
   */
  public modifyCustomer(
    id: string,
    email: string,
    given_name: string,
    family_name: string,
  ) {
    return this.customersRepository.update(id, email, given_name, family_name);
  }
}
