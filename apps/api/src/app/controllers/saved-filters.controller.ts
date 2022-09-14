import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { SavedFilter } from '../models/saved-filter';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Saved Filters')
@Controller('saved-filters')
export class SavedFiltersController extends ReadController<SavedFilter> {
  constructor(@InjectModel(SavedFilter.name) model) { super(model); }
}
