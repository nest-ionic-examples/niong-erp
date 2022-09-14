import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from '../models/customer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController extends ReadController<Customer> {
  constructor(@InjectModel(Customer.name) model) { super(model); }
}
