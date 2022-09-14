import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { PayRoll } from '../models/pay-roll';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pay Rolls')
@Controller('pay-rolls')
export class PayRollsController extends ReadController<PayRoll> {
  constructor(@InjectModel(PayRoll.name) model) { super(model); }
}
