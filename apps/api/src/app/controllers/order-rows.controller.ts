import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { OrderRow } from '../models/order-row';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order Rows')
@Controller('order-rows')
export class OrderRowsController extends ReadController<OrderRow> {
  constructor(@InjectModel(OrderRow.name) model) { super(model); }
}
