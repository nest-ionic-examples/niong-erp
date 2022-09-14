import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Import } from '../models/import';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Imports')
@Controller('imports')
export class ImportsController extends ReadController<Import> {
  constructor(@InjectModel(Import.name) model) { super(model); }
}
