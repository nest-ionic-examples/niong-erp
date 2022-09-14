import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { WorkCentre } from '../models/work-centre';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Work Centres')
@Controller('work-centres')
export class WorkCentresController extends ReadController<WorkCentre> {
  constructor(@InjectModel(WorkCentre.name) model) { super(model); }
}
