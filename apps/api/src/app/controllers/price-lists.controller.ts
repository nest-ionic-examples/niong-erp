import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { PriceList } from '../models/price-list';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Price Lists')
@Controller('price-lists')
export class PriceListsController extends ReadController<PriceList> {
  constructor(@InjectModel(PriceList.name) model) { super(model); }
}
