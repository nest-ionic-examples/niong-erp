import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { JobPosition } from '../models/job-position';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Job Positions')
@Controller('job-positions')
export class JobPositionsController extends ReadController<JobPosition> {
  constructor(@InjectModel(JobPosition.name) model) { super(model); }
}
