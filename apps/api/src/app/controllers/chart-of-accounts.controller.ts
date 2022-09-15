import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ChartOfAccount } from '../models/chart-of-account';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Chart Accounts')
@Controller('chart-accounts')
export class ChartOfAccountsController extends ReadController<ChartOfAccount> {
  constructor(@InjectModel(ChartOfAccount.name) model) { super(model); }
}
