import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Degree } from '../models/degree';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Degrees')
@Controller('degrees')
export class DegreesController extends ReadController<Degree> {
  constructor(@InjectModel(Degree.name) model) { super(model); }
}
