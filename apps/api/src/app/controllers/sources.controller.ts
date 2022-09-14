import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Source } from '../models/source';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sources')
@Controller('sources')
export class SourcesController extends ReadController<Source> {
  constructor(@InjectModel(Source.name) model) { super(model); }
}
