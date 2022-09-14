import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { MonthHours } from '../models/month-hours';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Month Hours')
@Controller('month-hours')
export class MonthHoursController extends ReadController<MonthHours> {
  constructor(@InjectModel(MonthHours.name) model) { super(model); }
}
