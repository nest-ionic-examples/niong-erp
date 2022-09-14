import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProductType } from '../models/product-type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Types')
@Controller('product-types')
export class ProductTypesController extends ReadController<ProductType> {
  constructor(@InjectModel(ProductType.name) model) { super(model); }
}
