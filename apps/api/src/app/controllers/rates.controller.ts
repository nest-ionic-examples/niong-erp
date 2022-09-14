import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Rate } from '../models/rate';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rates')
@Controller('rates')
export class RatesController extends ReadController<Rate> {
  constructor(@InjectModel(Rate.name) model) { super(model); }
}
