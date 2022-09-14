import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Quotation } from '../models/quotation';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Quotations')
@Controller('quotations')
export class QuotationsController extends ReadController<Quotation> {
  constructor(@InjectModel(Quotation.name) model) { super(model); }
}
