import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { WeeklyScheduler } from '../models/weekly-scheduler';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Weekly Schedulers')
@Controller('weekly-schedulers')
export class WeeklySchedulersController extends ReadController<WeeklyScheduler> {
  constructor(@InjectModel(WeeklyScheduler.name) model) { super(model); }
}
