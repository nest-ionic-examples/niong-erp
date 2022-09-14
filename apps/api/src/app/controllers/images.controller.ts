import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Images } from '../models/images';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Images')
@Controller('images')
export class ImagesController extends ReadController<Images> {
  constructor(@InjectModel(Images.name) model) { super(model); }
}
