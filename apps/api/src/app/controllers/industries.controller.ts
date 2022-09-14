import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Industry } from '../models/industry';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Industries')
@Controller('industries')
export class IndustriesController extends ReadController<Industry> {
  constructor(@InjectModel(Industry.name) model) { super(model); }
}
