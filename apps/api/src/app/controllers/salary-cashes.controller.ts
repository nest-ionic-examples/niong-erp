import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { SalaryCash } from '../models/salary-cash';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Salary Cashes')
@Controller('salary-cashes')
export class SalaryCashesController extends ReadController<SalaryCash> {
  constructor(@InjectModel(SalaryCash.name) model) { super(model); }
}
