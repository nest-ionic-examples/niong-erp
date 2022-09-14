import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ChartAccount } from '../models/chart-account';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Chart Accounts')
@Controller('chart-accounts')
export class ChartAccountsController extends ReadController<ChartAccount> {
  constructor(@InjectModel(ChartAccount.name) model) { super(model); }
}
