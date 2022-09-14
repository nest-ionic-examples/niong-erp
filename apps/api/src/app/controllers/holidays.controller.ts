import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Holiday } from '../models/holiday';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Holidays')
@Controller('holidays')
export class HolidaysController extends ReadController<Holiday> {
  constructor(@InjectModel(Holiday.name) model) { super(model); }
}
