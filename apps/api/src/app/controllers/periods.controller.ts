import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Period } from '../models/period';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Periods')
@Controller('periods')
export class PeriodsController extends ReadController<Period> {
  constructor(@InjectModel(Period.name) model) { super(model); }
}
