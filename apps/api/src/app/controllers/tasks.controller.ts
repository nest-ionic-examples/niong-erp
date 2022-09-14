import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../models/task';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController extends ReadController<Task> {
  constructor(@InjectModel(Task.name) model) { super(model); }
}
