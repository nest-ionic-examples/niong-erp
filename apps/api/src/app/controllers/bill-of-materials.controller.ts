import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { BillOfMaterial } from '../models/bill-of-material';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bill Of Materials')
@Controller('bill-of-materials')
export class BillOfMaterialsController extends ReadController<BillOfMaterial> {
  constructor(@InjectModel(BillOfMaterial.name) model) { super(model); }
}
