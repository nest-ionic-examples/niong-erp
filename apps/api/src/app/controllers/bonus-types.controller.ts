import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { BonusType } from '../models/bonus-type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bonus Types')
@Controller('bonus-types')
export class BonusTypesController extends ReadController<BonusType> {
  constructor(@InjectModel(BonusType.name) model) { super(model); }
}
