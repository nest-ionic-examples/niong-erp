import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { CustomDashboard } from '../models/custom-dashboard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Custom Dashboards')
@Controller('custom-dashboards')
export class CustomDashboardsController extends ReadController<CustomDashboard> {
  constructor(@InjectModel(CustomDashboard.name) model) { super(model); }
}
