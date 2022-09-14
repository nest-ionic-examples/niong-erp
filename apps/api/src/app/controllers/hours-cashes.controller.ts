import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { HoursCash } from '../models/hours-cash';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hours Cashes')
@Controller('hours-cashes')
export class HoursCashesController extends ReadController<HoursCash> {
  constructor(@InjectModel(HoursCash.name) model) { super(model); }
}
