import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { CustomReport } from '../models/custom-report';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Custom Reports')
@Controller('custom-reports')
export class CustomReportsController extends ReadController<CustomReport> {
  constructor(@InjectModel(CustomReport.name) model) { super(model); }
}
