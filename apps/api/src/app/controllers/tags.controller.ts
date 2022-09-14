import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Tag } from '../models/tag';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tags')
@Controller('tags')
export class TagsController extends ReadController<Tag> {
  constructor(@InjectModel(Tag.name) model) { super(model); }
}
