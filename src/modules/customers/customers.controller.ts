import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import {
  CustomerRequest,
  GetCustomerRequest,
} from '../../types/customers.type';

@Controller()
export class CustomersController {
  constructor(private readonly service: CustomersService) {}

  @Get('customers')
  public getCustomers() {
    return this.service.getCustomers();
  }

  @Get('customers/:id')
  public getCustomer(@Param() { id }: GetCustomerRequest) {
    return this.service.getCustomer(id);
  }

  @Delete('customers/:id')
  public deleteCustomer(@Param() { id }: GetCustomerRequest) {
    return this.service.deleteCustomer(id);
  }

  @Post('customer')
  public addCustomer(
    @Body() { email, given_name, family_name }: CustomerRequest,
  ) {
    return this.service.addCustomer(email, given_name, family_name);
  }

  @Put('customers/:id')
  public modifyCustomer(
    @Param() { id }: GetCustomerRequest,
    @Body() { email, given_name, family_name }: CustomerRequest,
  ) {
    return this.service.modifyCustomer(id, email, given_name, family_name);
  }
}
