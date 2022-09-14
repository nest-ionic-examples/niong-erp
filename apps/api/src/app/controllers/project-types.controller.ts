import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectType } from '../models/project-type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Project Types')
@Controller('project-types')
export class ProjectTypesController extends ReadController<ProjectType> {
  constructor(@InjectModel(ProjectType.name) model) { super(model); }
}
