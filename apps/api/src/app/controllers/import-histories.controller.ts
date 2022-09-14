import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ImportHistory } from '../models/import-history';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Import Histories')
@Controller('import-histories')
export class ImportHistoriesController extends ReadController<ImportHistory> {
  constructor(@InjectModel(ImportHistory.name) model) { super(model); }
}
