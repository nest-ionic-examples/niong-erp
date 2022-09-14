import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { DealTask } from '../models/deal-task';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Deal Tasks')
@Controller('deal-tasks')
export class DealTasksController extends ReadController<DealTask> {
  constructor(@InjectModel(DealTask.name) model) { super(model); }
}
