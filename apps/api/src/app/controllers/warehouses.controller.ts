import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Warehouse } from '../models/warehouse';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Warehouses')
@Controller('warehouses')
export class WarehousesController extends ReadController<Warehouse> {
  constructor(@InjectModel(Warehouse.name) model) { super(model); }
}
