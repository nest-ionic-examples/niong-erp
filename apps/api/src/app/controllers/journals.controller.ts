import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Journal } from '../models/journal';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Journals')
@Controller('journals')
export class JournalsController extends ReadController<Journal> {
  constructor(@InjectModel(Journal.name) model) { super(model); }
}
