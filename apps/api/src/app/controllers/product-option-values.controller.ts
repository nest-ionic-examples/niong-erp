import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProductOptionValue } from '../models/product-option-value';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Option Values')
@Controller('product-option-values')
export class ProductOptionValuesController extends ReadController<ProductOptionValue> {
  constructor(@InjectModel(ProductOptionValue.name) model) { super(model); }
}
