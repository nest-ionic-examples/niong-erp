import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Transfer } from '../models/transfer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transfers')
@Controller('transfers')
export class TransfersController extends ReadController<Transfer> {
  constructor(@InjectModel(Transfer.name) model) { super(model); }
}
