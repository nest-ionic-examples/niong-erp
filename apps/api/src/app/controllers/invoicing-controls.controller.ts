import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { InvoicingControl } from '../models/invoicing-control';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Invoicing Controls')
@Controller('invoicing-controls')
export class InvoicingControlsController extends ReadController<InvoicingControl> {
  constructor(@InjectModel(InvoicingControl.name) model) { super(model); }
}
