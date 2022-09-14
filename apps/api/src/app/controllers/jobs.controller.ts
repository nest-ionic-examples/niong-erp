import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Jobs } from '../models/jobs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Jobs')
@Controller('jobs')
export class JobsController extends ReadController<Jobs> {
  constructor(@InjectModel(Jobs.name) model) { super(model); }
}
