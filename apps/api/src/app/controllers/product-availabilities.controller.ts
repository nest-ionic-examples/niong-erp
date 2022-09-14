import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProductAvailability } from '../models/product-availability';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Availabilities')
@Controller('product-availabilities')
export class ProductAvailabilitiesController extends ReadController<ProductAvailability> {
  constructor(@InjectModel(ProductAvailability.name) model) { super(model); }
}
