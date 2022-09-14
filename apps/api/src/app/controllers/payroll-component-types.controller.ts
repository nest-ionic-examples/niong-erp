import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { PayrollComponentType } from '../models/payroll-component-type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payroll Component Types')
@Controller('payroll-component-types')
export class PayrollComponentTypesController extends ReadController<PayrollComponentType> {
  constructor(@InjectModel(PayrollComponentType.name) model) { super(model); }
}
