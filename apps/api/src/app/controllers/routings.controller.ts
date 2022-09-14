import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Routing } from '../models/routing';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Routings')
@Controller('routings')
export class RoutingsController extends ReadController<Routing> {
  constructor(@InjectModel(Routing.name) model) { super(model); }
}
