import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { CashTransfer } from '../models/cash-transfer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cash Transfers')
@Controller('cash-transfers')
export class CashTransfersController extends ReadController<CashTransfer> {
  constructor(@InjectModel(CashTransfer.name) model) { super(model); }
}
