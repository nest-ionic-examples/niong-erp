import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { VacationCache } from '../models/vacation-cache';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Vacation Caches')
@Controller('vacation-caches')
export class VacationCachesController extends ReadController<VacationCache> {
  constructor(@InjectModel(VacationCache.name) model) { super(model); }
}
