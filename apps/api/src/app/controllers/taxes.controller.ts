import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Tax } from '../models/tax';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Taxes')
@Controller('taxes')
export class TaxesController extends ReadController<Tax> {
  constructor(@InjectModel(Tax.name) model) { super(model); }
}
