import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Incoterm } from '../models/incoterm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Incoterms')
@Controller('incoterms')
export class IncotermsController extends ReadController<Incoterm> {
  constructor(@InjectModel(Incoterm.name) model) { super(model); }
}
