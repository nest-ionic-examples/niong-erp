import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Destination } from '../models/destination';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Destinations')
@Controller('destinations')
export class DestinationsController extends ReadController<Destination> {
  constructor(@InjectModel(Destination.name) model) { super(model); }
}
