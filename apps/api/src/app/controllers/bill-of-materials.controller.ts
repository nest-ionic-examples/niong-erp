import { Controller } from '@nestjs/common';
import { ReadController } from './core/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { BillOfMaterial } from '../models/billOfMaterial';

@Controller('bill-of-materials')
export class BillOfMaterialsController extends ReadController<BillOfMaterial> {
  constructor(@InjectModel(BillOfMaterial.name) model) { super(model); }

}
