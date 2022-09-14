import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../models/product';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController extends ReadController<Product> {
  constructor(@InjectModel(Product.name) model) { super(model); }
}
