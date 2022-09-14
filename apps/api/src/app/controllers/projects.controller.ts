import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from '../models/project';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController extends ReadController<Project> {
  constructor(@InjectModel(Project.name) model) { super(model); }
}
