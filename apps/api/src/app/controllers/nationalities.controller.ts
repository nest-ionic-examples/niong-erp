import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Nationality } from '../models/nationality';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Nationalities')
@Controller('nationalities')
export class NationalitiesController extends ReadController<Nationality> {
  constructor(@InjectModel(Nationality.name) model) { super(model); }
}
