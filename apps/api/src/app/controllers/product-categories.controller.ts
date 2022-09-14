import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ProductCategory } from '../models/product-category';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Categories')
@Controller('product-categories')
export class ProductCategoriesController extends ReadController<ProductCategory> {
  constructor(@InjectModel(ProductCategory.name) model) { super(model); }
}
