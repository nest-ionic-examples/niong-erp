import { Controller } from '@nestjs/common';
import { ReadController } from './core/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { BonusType } from '../models/bonus-type';

@Controller('bonus-types')
export class BonusTypesController extends ReadController<BonusType> {
  constructor(@InjectModel(BonusType.name) model) { super(model); }
}
