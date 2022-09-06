import { Controller } from '@nestjs/common';
import { ReadController } from './core/read.controller';
import { BillOfMaterial } from '../models/bill-of-material';
import { InjectModel } from '@nestjs/mongoose';

@Controller('bill-of-materials')
export class BillOfMaterialsController extends ReadController<BillOfMaterial> {
  constructor(@InjectModel(BillOfMaterial.name) model) { super(model); }

}
