import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Currency } from '../models/currency';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Currencies')
@Controller('currencies')
export class CurrenciesController extends ReadController<Currency> {
  constructor(@InjectModel(Currency.name) model) { super(model); }
}
