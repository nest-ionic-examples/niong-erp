import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectPosition } from '../models/project-position';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Project Positions')
@Controller('project-positions')
export class ProjectPositionsController extends ReadController<ProjectPosition> {
  constructor(@InjectModel(ProjectPosition.name) model) { super(model); }
}
