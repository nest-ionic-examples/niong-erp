import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Priority } from '../models/priority';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Priorities')
@Controller('priorities')
export class PrioritiesController extends ReadController<Priority> {
  constructor(@InjectModel(Priority.name) model) { super(model); }
}
