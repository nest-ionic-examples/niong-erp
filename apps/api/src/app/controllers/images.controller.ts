import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Image } from '../models/image';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Images')
@Controller('images')
export class ImagesController extends ReadController<Image> {
  constructor(@InjectModel(Image.name) model) { super(model); }
}
