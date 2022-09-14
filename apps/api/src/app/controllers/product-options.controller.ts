import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProductOption } from '../models/product-option';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Options')
@Controller('product-options')
export class ProductOptionsController extends ReadController<ProductOption> {
  constructor(@InjectModel(ProductOption.name) model) { super(model); }
}
