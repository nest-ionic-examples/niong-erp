import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ManufacturingOrder } from '../models/manufacturing-order';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Manufacturing Orders')
@Controller('manufacturing-orders')
export class ManufacturingOrdersController extends ReadController<ManufacturingOrder> {
  constructor(@InjectModel(ManufacturingOrder.name) model) { super(model); }
}
