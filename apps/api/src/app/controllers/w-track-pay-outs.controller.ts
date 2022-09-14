import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { WTrackPayOut } from '../models/w-track-pay-out';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('W Track Pay Outs')
@Controller('w-track-pay-outs')
export class WTrackPayOutsController extends ReadController<WTrackPayOut> {
  constructor(@InjectModel(WTrackPayOut.name) model) { super(model); }
}
