import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectMember } from '../models/project-member';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Project Members')
@Controller('project-members')
export class ProjectMembersController extends ReadController<ProjectMember> {
  constructor(@InjectModel(ProjectMember.name) model) { super(model); }
}
