import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { CustomChart } from '../models/custom-chart';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Custom Charts')
@Controller('custom-charts')
export class CustomChartsController extends ReadController<CustomChart> {
  constructor(@InjectModel(CustomChart.name) model) { super(model); }
}
