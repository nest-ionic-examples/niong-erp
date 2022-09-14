import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from '../models/brand';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController extends ReadController<Brand> {
  constructor(@InjectModel(Brand.name) model) { super(model); }
}
