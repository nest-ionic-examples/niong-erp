import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Workflow } from '../models/workflow';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Workflows')
@Controller('workflows')
export class WorkflowsController extends ReadController<Workflow> {
  constructor(@InjectModel(Workflow.name) model) { super(model); }
}
