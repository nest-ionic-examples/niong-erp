import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { Locations } from '../models/locations';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Locations')
@Controller('locations')
export class LocationsController extends ReadController<Locations> {
  constructor(@InjectModel(Locations.name) model) { super(model); }
}
