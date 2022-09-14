import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Capacity } from '../models/capacity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Capacities')
@Controller('capacities')
export class CapacitiesController extends ReadController<Capacity> {
  constructor(@InjectModel(Capacity.name) model) { super(model); }
}
