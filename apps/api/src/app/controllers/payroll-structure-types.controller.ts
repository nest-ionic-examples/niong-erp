import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { PayrollStructureType } from '../models/payroll-structure-type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payroll Structure Types')
@Controller('payroll-structure-types')
export class PayrollStructureTypesController extends ReadController<PayrollStructureType> {
  constructor(@InjectModel(PayrollStructureType.name) model) { super(model); }
}
