import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { CurrencyStore } from '../models/currency-store';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Currency Stores')
@Controller('currency-stores')
export class CurrencyStoresController extends ReadController<CurrencyStore> {
  constructor(@InjectModel(CurrencyStore.name) model) { super(model); }
}
