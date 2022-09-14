import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { History } from '../models/history';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Histories')
@Controller('histories')
export class HistoriesController extends ReadController<History> {
  constructor(@InjectModel(History.name) model) { super(model); }
}
