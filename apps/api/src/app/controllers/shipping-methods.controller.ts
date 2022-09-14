import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ShippingMethod } from '../models/shipping-method';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Shipping Methods')
@Controller('shipping-methods')
export class ShippingMethodsController extends ReadController<ShippingMethod> {
  constructor(@InjectModel(ShippingMethod.name) model) { super(model); }
}
